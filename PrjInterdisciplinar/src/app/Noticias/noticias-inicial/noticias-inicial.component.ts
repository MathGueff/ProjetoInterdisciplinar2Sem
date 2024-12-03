import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../models/noticia';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { NoticiasCardComponent } from "../noticias-card/noticias-card.component";

@Component({
  selector: 'app-noticias-inicial',
  standalone: true,
  imports: [CommonModule, NoticiasCardComponent, ReactiveFormsModule],
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
      title: 'Despejo de esgoto sem tratamento no Rio Sorocaba afeta processo de despoluição, alertam especialistas',
      tags: 'Poluição',
      description:
        'Despejo de esgoto sem tratamento no Rio Sorocaba afeta processo de despoluição, alertam especialistas',
      image: 'img/paginas/noticias/noticia1.webp',
    },
    {
      id: 2,
      title: 'Projeto visa recuperação ambiental do Rio Sorocaba em parceria com ONGs.',
      tags: 'Saneamento',
      description:
        'Iniciativa pretende reduzir o despejo irregular de resíduos e conscientizar a população.',
      image: 'img/paginas/reclamacoes/user1.jpg',
    },
    {
      id: 3,
      title: 'Municípios se unem para investir em saneamento básico.',
      tags: 'Infraestrutura',
      description:
        'Regiões próximas ao Rio Sorocaba estão adotando planos para melhorar o tratamento de esgoto.',
      image: 'img/paginas/noticias/noticia1.webp',
    },
    {
      id: 4,
      title: 'Nova tecnologia promete eficiência no tratamento de águas residuais.',
      tags: 'Inovação',
      description:
        'Soluções modernas podem acelerar o processo de despoluição e beneficiar comunidades locais.',
      image: 'img/paginas/noticias/noticia1.webp',
    },
    {
      id: 5,
      title: 'População denuncia aumento de poluição no Rio Sorocaba.',
      tags: 'Denúncia',
      description:
        'Moradores relatam impactos negativos na qualidade de vida devido ao esgoto não tratado.',
      image: 'img/paginas/noticias/noticia1.webp',
    },    
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
      if(this.TagSelect.value.tagForm === "Todos" || this.TagSelect.value.tagForm == ""){
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
