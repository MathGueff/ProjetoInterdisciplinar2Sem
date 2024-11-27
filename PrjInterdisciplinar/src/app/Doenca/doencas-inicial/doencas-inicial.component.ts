import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Doencas } from '../../models/doencas';
import { DoencaCardComponent } from '../doenca-card/doenca-card.component';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-doencas-inicial',
  standalone: true,
  imports: [CommonModule, DoencaCardComponent, ReactiveFormsModule],
  templateUrl: './doencas-inicial.component.html',
  styleUrl: './doencas-inicial.component.css'
})
export class DoencasInicialComponent implements OnInit {
  private doencaSubject =new BehaviorSubject<Doencas[]>([] as any);
  data$:Observable<Doencas[]> = this.doencaSubject.asObservable();
  TagSelect: FormGroup;
  doencas: Doencas[] = [
    {
      id: 1,
      title: 'Amebíase',
      description:
        'A amebíase é mais comum em regiões onde as condições de saneamento básico são precárias, uma vez que a forma de contaminação se dá via ingestão de seus cistos',
      image: 'img/paginas/doencas/amebiase.jpg',
      tags: 'tag1'
    },
    {
      id: 2,
      title: 'Cólera',
      description:
        'De acordo com relatos bem antigos, a cólera estava presente desde os primeiros séculos da humanidade, causando diarreias agudas de aspecto semelhante à água de arroz, vômitos e, em casos mais acentuados, câimbras, perda de peso intensa e olhos turvos',
      image: 'img/paginas/doencas/colera.webp',
      tags: 'tag2'
    },
    {
      id: 3,
      title: 'Esquistossomose',
      description:
        'Esquistossomose é uma doença parasitária causada por um platelminto. A doença é também conhecida como doença do caramujo, xistose e barriga d’água.',
      image: 'img/paginas/doencas/esquistossomose.jpg',
      tags: 'tag3'
    },
    {
      id: 4,
      title: 'Leptospirose',
      description:
        'Leptospirose é uma doença transmitida principalmente pela urina de animais infectados, como roedores, e pode ser contraída pelo contato com água ou com solo contaminados.',
      image: 'img/paginas/doencas/leptospirose.webp',
      tags: 'tag4'
    },
    {
      id: 5,
      title: 'Ascaridíase',
      description:
        'A ascaridíase é o resultado da infestação do helminto Ascaris lumbricoides no organismo, sendo mais frequentemente encontrado no intestino',
      image: 'img/paginas/doencas/ascaridiase.webp',
      tags: 'tag5'
    },
  ];

  constructor(private fb:FormBuilder){
    this.doencaSubject.next(this.doencas);
    this.TagSelect = this.fb.group({
        tagForm: ['Todos']
      }
    );
   }

   ngOnInit():void{
    this.TagSelect.valueChanges.subscribe(() => {
      let lista : Doencas [] = [];
      //Verifica se nenhuma Tag foi selecionada
      if(this.TagSelect.value.tagForm === "Todas"){
        lista = this.doencas;
      }
      // Filtra o array de Reclamações pela tag selecionada
      else{
        lista = this.doencas.filter((doencas) =>{
        return doencas.tags === this.TagSelect.value.tagForm
      });
      }
      //atualizando o valor do Observabale
      this.doencaSubject.next(lista);
    })
  }
}
