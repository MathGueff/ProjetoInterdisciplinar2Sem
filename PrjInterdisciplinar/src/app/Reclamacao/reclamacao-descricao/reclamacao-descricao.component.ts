import { Component, OnInit } from '@angular/core';
import { Reclamacao } from '../../models/reclamacao';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reclamacao-descricao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reclamacao-descricao.component.html',
  styleUrl: './reclamacao-descricao.component.css'
})
export class ReclamacaoDescricaoComponent implements OnInit {
  private reclacaoSubject = new BehaviorSubject<Reclamacao | undefined>(undefined);
  dado$: Observable<Reclamacao | undefined> = this.reclacaoSubject.asObservable();
  constructor(private activedrouter : ActivatedRoute){}
  ngOnInit(): void {
    this.activedrouter.params.subscribe( (parametros) =>{
      const idParametro = Number(parametros['id']);

      const reclamacao = this.reclamacoes.find((reclamacao) => reclamacao.idReclamacao  === idParametro );

      if(reclamacao){
        this.reclacaoSubject.next(reclamacao);
        console.log(this.dado$);
      }else{
        console.log("Erro --> O método find esta retornando 'undefield'");
      }

    }

    )
  }
  reclamacoes: Reclamacao [] = [
    {
      idReclamacao:1,
      tituloReclamao: "Sei sei lá lá",
      descricaoReclamacao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis nec dui venenatis tempor. Nullam vitae sodales neque, at sodales lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Mauris dictum fringilla efficitur. Aliquam sit amet mi nunc. Nullam vel viverra turpis. Sed nec condimentum urna. Phasellus eu consectetur purus. Suspendisse non fringilla nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      dataReclamacao: "22/10/2004",
      objImagem :"img/paginas/reclamacoes/user1.jpg",
      objTag: "Tag1"
    },
    {
      idReclamacao:2,
      tituloReclamao: "Sei sei lá lá2",
      descricaoReclamacao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis nec dui venenatis tempor. Nullam vitae sodales neque, at sodales lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Mauris dictum fringilla efficitur. Aliquam sit amet mi nunc. Nullam vel viverra turpis. Sed nec condimentum urna. Phasellus eu consectetur purus. Suspendisse non fringilla nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      dataReclamacao: "22/10/2024",
      objImagem :"img/paginas/reclamacoes/user2.jpg",
      objTag: "Tag2"
    },
    {
      idReclamacao:3,
      tituloReclamao: "Sei sei lá lá 3",
      descricaoReclamacao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis nec dui venenatis tempor. Nullam vitae sodales neque, at sodales lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Mauris dictum fringilla efficitur. Aliquam sit amet mi nunc. Nullam vel viverra turpis. Sed nec condimentum urna. Phasellus eu consectetur purus. Suspendisse non fringilla nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      dataReclamacao: "10/10/2014",
      objImagem :"img/paginas/reclamacoes/user3.jpg",
      objTag: "Tag3"
    }
  ];
}
