import { UserService } from './../../Services/user.service';
import { Comentario } from './../../models/comentario';
import { Component, inject, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-comentario-baixo',
  standalone: true,
  imports: [],
  templateUrl: './comentario-baixo.component.html',
  styleUrl: './comentario-baixo.component.css'
})
export class ComentarioBaixoComponent implements OnInit {
@Input() comentario !: Comentario;

userService = inject(UserService);
autor: string = '';

  ngOnInit(): void {
    if(this.comentario.objAdmin === null){
      const user = this.userService.getUserId(this.comentario.objUsuario.id)
      if (user !== undefined){
        this.autor = user.nome;
      }
    }
    else{
      this.autor = this.comentario.objAdmin;
    }
  }


}
