import { Component } from '@angular/core';
import { ComentarioBaixoComponent } from '../comentario-baixo/comentario-baixo.component';
import { ComentarioCimaComponent } from "../comentario-cima/comentario-cima.component";
import { CommonModule } from '@angular/common';
import { ComentarioInputComponent } from '../comentario-input/comentario-input.component';

@Component({
  selector: 'app-comentario-central',
  standalone: true,
  imports: [CommonModule,ComentarioCimaComponent,ComentarioBaixoComponent,ComentarioInputComponent],
  templateUrl: './comentario-central.component.html',
  styleUrl: './comentario-central.component.css'
})
export class ComentarioCentralComponent {
variavel: any = ''
}
