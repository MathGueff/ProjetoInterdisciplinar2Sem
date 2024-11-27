import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-noticias-card',
  standalone: true,
  imports: [],
  templateUrl: './noticias-card.component.html',
  styleUrl: './noticias-card.component.css'
})
export class NoticiasCardComponent {
  @Input () cardnoticias !: noticia
}
