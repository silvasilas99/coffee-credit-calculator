import { Modelo } from "../Modelos/Modelo";
import { IRepositorio } from "./IRepositorio";

export class Repositorio implements IRepositorio {
  protected modelo;
  protected regraDeOrdenacao: any;

  protected constructor(
    modelo: Modelo,
    regraDeOrdenacao: any
  ) {
    this.modelo = modelo.inicializarModelo();
    this.regraDeOrdenacao = regraDeOrdenacao;
  }

  public async inserir(data: object): Promise<any> {
    return await this.modelo.create(data);
  }

  public async buscarTodos(): Promise<Array<any>> {
    return await this.modelo.find({}).sort(this.regraDeOrdenacao);
  }
}