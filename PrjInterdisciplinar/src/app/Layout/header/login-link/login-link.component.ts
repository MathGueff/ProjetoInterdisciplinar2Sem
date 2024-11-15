import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { userService } from '../../../Services/user.service';

@Component({
  selector: 'app-login-link',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login-link.component.html',
  styleUrl: './login-link.component.css'
})
export class LoginLinkComponent implements OnInit{
  userAtivo : string = "";
  private userService = inject(userService);
  
  ngOnInit(): void {
    /* Alterando o nome do usuário ativo com Observable */
    this.userService.userAtivo$.subscribe((user) => {
        /* Caso não haja usuário ativo, é por padrão "login" */
        this.userAtivo = user ? user.nome : "Login";
    })
  }
}
