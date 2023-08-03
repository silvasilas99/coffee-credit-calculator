import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { ConectarComMongoDb } from "./config/ConectarComMongoDb";
import { RoteadorDeSolicitacaoDeCredito } from "./domain/SolicitacaoDeCredito/RoteadorDeSolicitacaoDeCredito";

dotenv.config();

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/solicitacaoDeCredito/', new RoteadorDeSolicitacaoDeCredito().pegarRoteador());

new ConectarComMongoDb().disparar();

const port : number = parseInt(process.env.PORT as string, 10) || 8080;
app.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
});
