import { Router } from "express";
import { ControladorCrudDeSolicitacaoDeCredito } from "./ControladorCrudDeSolicitacaoDeCredito";

export class RoteadorDeSolicitacaoDeCredito {
    private controlador = new ControladorCrudDeSolicitacaoDeCredito();
    private roteador : Router = Router();

    constructor () {
        this.roteador.post("/criar", async (req, res) => {
            await this.controlador.inserir(req, res);
        });
        this.roteador.get("/listar", async (req, res) => {
            await this.controlador.buscarTodos(res);
        });
    }

    public pegarRoteador () {
        return this.roteador;
    }
}