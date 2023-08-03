import { ControladorDeCrud } from "../../core/Controladores/ControladorDeCrud";
import { RepositorioDeSolicitacaoDeCredito } from "./RepositorioDeSolicitacaoDeCredito";
import { ServicosParaSolicitacaoDeCredito } from "./ServicosParaSolicitacaoDeCredito";

export class ControladorCrudDeSolicitacaoDeCredito extends ControladorDeCrud {
    constructor() {
        const repositorio = new RepositorioDeSolicitacaoDeCredito()
        super(repositorio);
    }

    protected async enriquecerDados(dados: object) {
        const servicos = new ServicosParaSolicitacaoDeCredito();
        return await servicos.validarEntaoEnriquecerDadosParaCriacao(dados);
    }
}