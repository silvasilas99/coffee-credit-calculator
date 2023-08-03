import axios from "axios";
import _ from "lodash";
import moment from "moment";

export class ServicosParaSolicitacaoDeCredito {
    private UF_PERMITIDAS = ["SP", "MG", "BA", "ES"];
    private VALOR_DA_SACA_BAHIA = 1080;
    private VALOR_DA_SACA_SAO_PAULO = 1050;
    private VALOR_DA_SACA_MINAS_GERAIS = 1100;
    private VALOR_DA_SACA_ESPIRITO_SANTO = 1030;
    private TAXA_DE_JUROS = 0.02;

    public async validarEntaoEnriquecerDadosParaCriacao(dados: object) {
        const cep: number | null = _.get(dados, "cep_do_produtor", null);
        if (!cep) {
            throw new Error("O CEP precisa ser preenchido para criar a solicitação.");
        }

        const endereco: object = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const uf: string = _.get(endereco, "data.uf", "");
        if (!this.UF_PERMITIDAS.includes(uf)) {
            throw new Error("Sua UF ainda não é abarcada pelo projeto, mas fique tranquilo, logo chegaremos aí.");
        }
        _.set(dados, "uf_do_produtor", uf);

        const hoje = moment(new Date());
        const dataDePagamento = moment(_.get(dados, "data_de_pagamento"));
        if (hoje > dataDePagamento) {
            throw new Error("A data de pagamento não pode ser anterior à hoje.");
        }
        const diferenca = moment.duration(dataDePagamento.diff(hoje));
        const mesesAtePagamento = diferenca.asMonths();

        const valorDaSaca = this.obterValorDaSacaPelaUf(uf)!;
        const valorDoEmprestimo = valorDaSaca * parseFloat(_.get(dados, "sacas_para_penhora", ""));
        const juros = valorDoEmprestimo * this.TAXA_DE_JUROS * mesesAtePagamento;
        const valorParaPagamento = valorDoEmprestimo + juros;

        _.set(dados, "valor_para_pagamento", parseFloat(valorParaPagamento.toFixed(2)));
        return dados;
    }

    private obterValorDaSacaPelaUf(uf: string) {
        switch (uf) {
            case "BA":
                return this.VALOR_DA_SACA_BAHIA;
            case "SP":
                return this.VALOR_DA_SACA_SAO_PAULO;
            case "MG":
                return this.VALOR_DA_SACA_MINAS_GERAIS;
            case "ES":
                return this.VALOR_DA_SACA_ESPIRITO_SANTO;
        }
    }
}