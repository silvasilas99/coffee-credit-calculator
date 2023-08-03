import { Repositorio } from "../Repositorio/Repositorio";

export abstract class ControladorDeCrud {
    protected repositorio: Repositorio;

    protected constructor(repositorio: Repositorio) {
        this.repositorio = repositorio;
    }

    public async inserir(requisicao: any, resposta: any) {
        try {
            let dadosDaRequisicao = requisicao.body;
            const dadosForamValidadosComSucesso = this.validarDados(dadosDaRequisicao);
            if (!dadosForamValidadosComSucesso) {
                return resposta.status(400).json("Confira sua petição e tente novamente.");
            }
            const dadosEnriquecidos = await this.enriquecerDados(dadosDaRequisicao);
            const entidadeParaRetorno = await this.repositorio.inserir(dadosEnriquecidos);
            return resposta
                .status(201)
                .json({
                    message: "Solicitação de crédito criada com sucesso!",
                    data: entidadeParaRetorno
                });
        } catch (err) {
            if (err instanceof Error) {
                return resposta.status(500).json(err.message);
            } else {
                return resposta.status(500).json("Erro não previsto. Contate o administrador do sistema.");
            }
        }
    }

    public async buscarTodos(resposta: any) {
        try {
            const dados = await this.repositorio.buscarTodos();
            if (dados.length === 0) {
                return resposta.status(404).json("Não foram encontrados registros.");
            }
            return resposta
                .status(200)
                .json({
                    message: "OK!",
                    data: { itens: dados }
                });
        } catch (err) {
            if (err instanceof Error) {
                return resposta.status(500).json(err.message);
            } else {
                return resposta.status(500).json("Erro não previsto. Contate o administrador do sistema.");
            }
        }
    }

    protected validarDados(dados: object) {
        if (dados) {
            return true;
        }
    }

    protected async enriquecerDados(dados: object) {
        return dados;
    }
}