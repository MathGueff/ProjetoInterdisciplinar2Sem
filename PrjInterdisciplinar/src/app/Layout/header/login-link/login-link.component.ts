import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'app-login-link',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login-link.component.html',
  styleUrl: './login-link.component.css'
})
export class LoginLinkComponent implements OnInit{
  userAtivo : string | null = null;
  private userService = inject(UserService);
  
  ngOnInit(): void {
    /* Alterando o nome do usuário ativo com Observable */
    this.userService.userAtivo$.subscribe({
        next: (user) => {
          if(user){
            /* Caso não haja usuário ativo, é por padrão "login" */
            this.userAtivo = user.nome;
          }
          else{
            this.userAtivo = null;
          }
        },
        error: (err) => {
          console.log("Erro ao atribuir usuário ativo " + err)
        }
    })
  }

  btnLogout(){
    this.userService.logout();
  }
}
