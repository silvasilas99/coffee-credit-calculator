import { Schema, model } from "mongoose";
import { IEntidade } from "../Entidades/IEntidade";

export abstract class Modelo {
    protected nomeDoModelo : string;
    protected propriedadesDoModelo : object;
    private esqueleto : Schema;

    protected constructor (
        nomeDoModelo : string,
        propriedadesDoModelo : object
    ) {
        this.esqueleto = new Schema<IEntidade>(propriedadesDoModelo);
        this.nomeDoModelo = nomeDoModelo;
    }

    public inicializarModelo() {
        return model<IEntidade>(this.nomeDoModelo, this.esqueleto);
    }
}