import { Noticia } from './../../models/noticia';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Noticia } from '../../models/noticia';
import { NoticiasCardComponent } from '../noticias-card/noticias-card.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-noticias-inicial',
  standalone: true,
  imports: [CommonModule, NoticiasCardComponent],
  templateUrl: './noticias-inicial.component.html',
  styleUrl: './noticias-inicial.component.css'
})
export class NoticiasInicialComponent {
  private NoticiaSubject =new BehaviorSubject<Noticia[]>([] as any);
  data$:Observable<Noticia[]> = this.NoticiaSubject.asObservable();
  TagSelect: FormGroup;
  noticias: Noticia[] = [
    {
      id: 1,
      tags:['#Prefeitura', '#Decisão'],
      description:
        'Prefeitos eleitos vão governar em ciclo decisivo para metas do saneamento',
      image: 'img/paginas/noticias/noticia1.webp',

    },
    {
      id: 2,
      tags:['#Prefeitura', '#Decisão'],
      description:
        'Prefeitos eleitos vão governar em ciclo decisivo para metas do saneamento',
      image: 'img/paginas/noticias/noticia1.webp',
    },
    {
      id: 3,
      tags:['#Prefeitura', '#Decisão'],
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
      let lista : Noticia[] = [];
      //Verifica se nenhuma Tag foi selecionada
      if(this.TagSelect.value.tagForm === "Todas"){
        lista = this.noticias;
      }
      // Filtra o array de Reclamações pela tag selecionada
      else{
        lista = this.noticias.filter((Noticia) =>{
        return this.noticias.tags === this.TagSelect.value.tagForm
      });
      }
      //atualizando o valor do Observabale
      this.doencaSubject.next(lista);
    })
  }
}
