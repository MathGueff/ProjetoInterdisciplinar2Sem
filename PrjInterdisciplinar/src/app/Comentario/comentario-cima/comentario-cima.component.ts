import { Component, Input } from '@angular/core';
import { Reclamacao } from '../../models/reclamacao';

@Component({
  selector: 'app-comentario-cima',
  standalone: true,
  imports: [],
  templateUrl: './comentario-cima.component.html',
  styleUrl: './comentario-cima.component.css'
})
export class ComentarioCimaComponent {
  @Input() reclamacao !: Reclamacao
}
