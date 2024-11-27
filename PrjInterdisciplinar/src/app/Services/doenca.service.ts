import { Injectable } from "@angular/core";
import { IDoenca } from "../models/doencas.model";

@Injectable({providedIn: 'root'})

export class DoencaService{
  private doencas : IDoenca[] = [
    {id : 1, nome_doenca : "Matheus", descricao: "teste", transmissao: "Ônibus", tratamento: "Paulada", sintomas: ['Febre', 'Dor de cabeça']},
    {id : 2, nome_doenca : "Davy", descricao: "teste2", transmissao: "Programação", tratamento: "Água", sintomas: ['Febre', 'Dor de barriga']}
  ]

  /* Validação de Doença */
  validateDoenca(newDoenca : string) : boolean{
    return this.doencas.some(doenca => doenca.nome_doenca != newDoenca);
  }

  /* Criação de uma nova Doença */
  newDoenca(newDoenca : IDoenca){
    this.doencas.push(newDoenca);
    console.log(this.doencas);
  }

  getCurrentID() : number{
    return this.doencas.length + 1
  }
}
