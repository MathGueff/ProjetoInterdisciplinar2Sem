import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Doencas } from '../models/doencas';

@Component({
  selector: 'app-doencas-inicial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doencas-inicial.component.html',
  styleUrl: './doencas-inicial.component.css'
})
export class DoencasInicialComponent {
  doencas:Doencas[] = [
    {
      id: 1,
      title: 'Amebíase',
      description: 'A amebíase é mais comum em regiões onde as condições de saneamento básico são precárias, uma vez que a forma de contaminação se dá via ingestão de seus cistos',
      image:
        '/public/img/paginas/doencas/amebiase.jpg',
    },
    {
      id: 2,
      title: 'Cólera',
      description: 'De acordo com relatos bem antigos, a cólera estava presente desde os primeiros séculos da humanidade, causando diarreias agudas de aspecto semelhante à água de arroz, vômitos e, em casos mais acentuados, câimbras, perda de peso intensa e olhos turvos',
      image:
        '/public/img/paginas/doencas/colera.webp',
    },
    {
      id: 3,
      title: 'Esquistossomose',
      description: 'Esquistossomose é uma doença parasitária causada por um platelminto. A doença é também conhecida como doença do caramujo, xistose e barriga d’água.',
      image:
        '/public/img/paginas/doencas/esquistossomose.jpg',
    },
    {
      id: 4,
      title: 'Leptospirose',
      description: 'Leptospirose é uma doença transmitida principalmente pela urina de animais infectados, como roedores, e pode ser contraída pelo contato com água ou com solo contaminados.',
      image:
        '/public/img/paginas/doencas/leptospirose.webp',
    },
    {
      id: 5,
      title: 'Ascaridíase',
      description: 'AA ascaridíase é o resultado da infestação do helminto Ascaris lumbricoides no organismo, sendo mais frequentemente encontrado no intestino',
      image:
        '/public/img/paginas/doencas/ascaridiase.webp',
    }
  ]
}
