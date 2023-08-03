import { Modelo } from "../../core/Modelos/Modelo";

export class ModeloDeSolicitacaoDeCredito extends Modelo{
  constructor() {
    const nomeDoModelo = 'SolicitacaoDeCredito'
    const propriedadesDoModelo = {
      nome_do_produtor: { type: String, required: true },
      cep_do_produtor: { type: Number, required: true },
      uf_do_produtor: { type: String, required: true },
      sacas_para_penhora: { type: Number, required: true },
      valor_para_pagamento: { type: Number, required: true },
      data_de_pagamento: { type: Date, required: true }
    };

    super(nomeDoModelo, propriedadesDoModelo);
  }
}