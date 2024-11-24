import { Injectable } from "@angular/core";
import { IDoenca } from "../models/doencas.model";

@Injectable({providedIn: 'root'})

export class DoencaService{
  private doencas : IDoenca[] = [
    {nome_doenca : "Matheus", transmissao: "Ônibus", tratamento: "Paulada"},
    {nome_doenca : "Davy", transmissao: "Programação", tratamento: "Água"}
  ]

  /* Validação de Usuário */
  validateDoenca(newDoenca : string) : boolean{
    return this.doencas.some(doenca => doenca.nome_doenca === newDoenca);
  }

  /* Criação de um novo usuário */
  newDoenca(newDoenca : IDoenca){
    this.doencas.push(newDoenca);
    console.log(this.doencas);
  }
}
