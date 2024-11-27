import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Noticia } from '../../models/noticia';

@Component({
  selector: 'app-noticias-inicial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticias-inicial.component.html',
  styleUrl: './noticias-inicial.component.css'
})
export class NoticiasInicialComponent {
  noticias: Noticia[] = [
    {
      id: 1,
      titulo: 'Teste',
      tags:['#Prefeitura', '#Decisão'],
      description:
        'Prefeitos eleitos vão governar em ciclo decisivo para metas do saneamento',
      image: 'img/paginas/noticias/noticia1.webp',
    }
  ]
}
