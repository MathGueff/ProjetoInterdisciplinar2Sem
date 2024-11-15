import { IEndereco } from "./endereco.model";

export interface IUser{
    nome: string,
    senha: string,
    email: string,
    telefone?: string,
    cpf?: string,
    endereco?: IEndereco 
}