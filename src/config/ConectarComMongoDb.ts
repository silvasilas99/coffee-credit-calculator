import { connect, ConnectOptions } from "mongoose";
import * as dotenv from "dotenv";

export class ConectarComMongoDb {
    private opcoesDeConexao: ConnectOptions;

    constructor() {
        dotenv.config();

        this.opcoesDeConexao = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as ConnectOptions;
    }

    public disparar() {
        return connect(process.env.MONGO_URI!, this.opcoesDeConexao)
            .then(() => {
                console.debug("Conectado ao banco de dados.");
            })
            .catch((err: { message: string; }) => {
                console.error(err.message);
            })
    }
}