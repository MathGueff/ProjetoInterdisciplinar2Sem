import { Component, Input } from '@angular/core';
import { Reclamacao } from '../../models/reclamacao';

@Component({
  selector: 'app-reclamacao-card',
  standalone: true,
  imports: [],
  templateUrl: './reclamacao-card.component.html',
  styleUrl: './reclamacao-card.component.css'
})
export class ReclamacaoCardComponent {
  @Input () card !: Reclamacao
}
