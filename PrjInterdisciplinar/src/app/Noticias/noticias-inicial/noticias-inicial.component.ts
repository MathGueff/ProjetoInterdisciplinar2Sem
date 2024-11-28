import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../models/noticia';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { NoticiasCardComponent } from "../noticias-card/noticias-card.component";

@Component({
  selector: 'app-noticias-inicial',
  standalone: true,
  imports: [CommonModule, NoticiasCardComponent],
  templateUrl: './noticias-inicial.component.html',
  styleUrl: './noticias-inicial.component.css'
})
export class NoticiasInicialComponent implements OnInit{
  private NoticiaSubject =new BehaviorSubject<Noticia[]>([] as any);
  data$:Observable<Noticia[]> = this.NoticiaSubject.asObservable();
  TagSelect: FormGroup;
  noticias: Noticia[] = [
    {
      id: 1,
      title: 'Despejo de esgoto sem tratamento no Rio Sorocaba afeta processo de despoluição, alertam especialistas.',
      tags:'tag1',
      description:
        'Prefeitos eleitos vão governar em ciclo decisivo para metas do saneamento',
      image: 'img/paginas/noticias/noticia1.webp',

    },
    {
      id: 2,
      title: 'lorem',
      tags:'tag2',
      description:
        'Prefeitos eleitos vão governar em ciclo decisivo para metas do saneamento',
      image: 'img/paginas/noticias/noticia1.webp',
    },
    {
      id: 3,
      title: 'lorem',
      tags:'tag3',
      description:
        'Prefeitos eleitos vão governar em ciclo decisivo para metas do saneamento',
      image: 'img/paginas/noticias/noticia1.webp',
    }
  ];

  constructor(private fb:FormBuilder){
    this.NoticiaSubject.next(this.noticias);
    this.TagSelect = this.fb.group({
        tagForm: ['Todos']
      }
    );
   }

   ngOnInit():void{
    this.TagSelect.valueChanges.subscribe(() => {
      let lista : Noticia [] = [];
      //Verifica se nenhuma Tag foi selecionada
      if(this.TagSelect.value.tagForm === "Todos"){
        lista = this.noticias;
      }
      // Filtra o array de Reclamações pela tag selecionada
      else{
        lista = this.noticias.filter((Noticia) =>{
        return Noticia.tags === this.TagSelect.value.tagForm
      });
      }
      //atualizando o valor do Observabale
      this.NoticiaSubject.next(lista);
    })
  }
}
