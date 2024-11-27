import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Noticia } from '../../models/noticia';

@Component({
  selector: 'app-noticias-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './noticias-card.component.html',
  styleUrl: './noticias-card.component.css'
})
export class NoticiasCardComponent {
  @Input () cardNoticia !: Noticia;
}
