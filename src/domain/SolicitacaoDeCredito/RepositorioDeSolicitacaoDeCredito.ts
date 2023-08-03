import { Repositorio } from "../../core/Repositorio/Repositorio";
import { ModeloDeSolicitacaoDeCredito } from "./ModeloDeSolicitacaoDeCredito";

export class RepositorioDeSolicitacaoDeCredito extends Repositorio {
    constructor () {
        const regraDeOrdenacao = { data_de_pagamento: 'desc'}
        super(new ModeloDeSolicitacaoDeCredito(), regraDeOrdenacao);
    }
}