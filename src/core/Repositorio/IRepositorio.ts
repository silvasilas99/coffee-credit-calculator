export interface IRepositorio {
    inserir(data: object) : Promise<any>;
    buscarTodos(): Promise<Array<any>>;
}