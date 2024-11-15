import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { userService } from '../../Services/user.service';
import { LoginStatus } from './FormStatus.enum';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css', '../links-redes.css']
})

export class FormLoginComponent{
  /* Injeções de Dependências */
  private formBuilderService = inject(NonNullableFormBuilder);
  private router = inject(Router);
  constructor(private userService : userService){}
  
  /* Reactive Form */
  protected formLogin = this.formBuilderService.group({
    email : ['', [Validators.required, Validators.email]],
    senha : ['', [Validators.required, Validators.minLength(6)]]
  })
  
  /* Variável de controle de validação */
  protected loginStatus : LoginStatus = LoginStatus.None;

  /* Método chamado com o btn submit */
  onSubmit(){
    let email = this.formLogin.controls.email.value;
    let senha = this.formLogin.controls.senha.value;
    if(this.formLogin.valid){
      this.checkLogin(email, senha);
    }
    else{
      /* Campos inválidos */
      this.loginStatus = LoginStatus.invalidControl;
    }
  }

  /* Verificação de login */
  checkLogin(email : string, senha : string){
    if(this.userService.validateUser(email, senha)){
      /* Navega para a pagina principal */
      this.loginStatus = LoginStatus.userValidated;
      this.router.navigate(['']);
    }
    else{
      /* Usuário inexistente */
      this.loginStatus = LoginStatus.invalidUser;
    }
  }

  /* Método para verificar status do enum */
  checkFormStatus(status : string) : boolean{
    if(this.loginStatus.valueOf() == status){
      return true;
    }
    return false;
  }
}
