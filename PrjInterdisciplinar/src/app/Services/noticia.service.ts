import { Injectable } from "@angular/core";
import { INoticia } from "../models/noticias.model";

@Injectable({providedIn: 'root'})

export class NoticiaService{
  private noticias : INoticia[] = [
    {id : 1, titulo : "Matheus", descricao: "teste", tags_noticia : ['tag1'] ,fontes_noticia : ['cabeça'], imagens_noticia: ['doenca.jpg']},
    {id : 2, titulo : "Davy", descricao: "teste2", tags_noticia : ['tag2', 'tag3'], fontes_noticia : ['vozes'], imagens_noticia: ['doenca.jpg']}
  ]

  /* Validação de Notícia */
  validateNoticia(newNoticia : string) : boolean{
    return this.noticias.some(noticia => noticia.titulo != newNoticia);
  }

  /* Criação de uma nova Doença */
  newNoticia(newNoticia : INoticia){
    this.noticias.push(newNoticia);
    console.log(this.noticias);
  }

  getCurrentID() : number{
    return this.noticias.length + 1
  }
}
