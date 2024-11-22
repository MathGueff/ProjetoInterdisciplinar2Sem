import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Noticia } from '../../models/noticia';
import { NoticiasCardComponent } from '../noticias-card/noticias-card.component';

@Component({
  selector: 'app-noticias-inicial',
  standalone: true,
  imports: [CommonModule, NoticiasCardComponent],
  templateUrl: './noticias-inicial.component.html',
  styleUrl: './noticias-inicial.component.css'
})
export class NoticiasInicialComponent {
  noticias: Noticia[] = [
    {
      id: 1,
      tags:['#Prefeitura', '#Decisão'],
      description:
        'Prefeitos eleitos vão governar em ciclo decisivo para metas do saneamento',
      image: 'img/paginas/noticias/noticia1.webp',
    }
  ]
}
