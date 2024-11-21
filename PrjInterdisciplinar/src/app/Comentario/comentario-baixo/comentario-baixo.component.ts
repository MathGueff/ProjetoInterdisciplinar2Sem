import { Comentario } from './../../models/comentario';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-comentario-baixo',
  standalone: true,
  imports: [],
  templateUrl: './comentario-baixo.component.html',
  styleUrl: './comentario-baixo.component.css'
})
export class ComentarioBaixoComponent implements OnInit {
@Input() comentario !: Comentario;
autor: string = '';

  ngOnInit(): void {
    if(this.comentario.objAdmin === null){
      this.autor = 'Usuário';
    }
    else{
      this.autor = this.comentario.objAdmin;
    }
  }


}
