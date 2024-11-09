import { Component } from '@angular/core';
import { ReclamacaoCardComponent } from '../reclamacao-card/reclamacao-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reclamacao-inicial',
  standalone: true,
  imports: [CommonModule, ReclamacaoCardComponent],
  templateUrl: './reclamacao-inicial.component.html',
  styleUrl: './reclamacao-inicial.component.css'
})
export class ReclamacaoInicialComponent {

}
