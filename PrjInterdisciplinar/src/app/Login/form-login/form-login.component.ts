import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { FormInputComponent } from "../../Common/form-input/form-input.component";
import { LoginErrorStatus } from './LoginErrorStatus.enum';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule, FormInputComponent],
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css', '../links-redes.css']
})

export class FormLoginComponent implements OnInit{
  /* Injeção de Dependências */
  private formBuilderService = inject(NonNullableFormBuilder);
  private router = inject(Router);
  private userService = inject(UserService)
  
  /* Reactive Form */
  protected formLogin = this.formBuilderService.group({
    email : ['', [Validators.required, Validators.email]],
    senha : ['', [Validators.required, Validators.minLength(6)]]
  })
  
  /* Variável de controle de validação */
  protected loginErrorStatus : LoginErrorStatus = LoginErrorStatus.None;
  /*
    *None -> Formulário sem problemas
    *invalidControl -> Campo inválido
    *invalidUser -> Usuário inexistente
  */

  /* Método chamado com o btn submit */
  onSubmit(){
    if(this.formLogin.valid){  //Caso o formulário seja válido
      let email = this.formLogin.controls.email.value;
      let senha = this.formLogin.controls.senha.value;
      //Chamando função para verificar usuário      
      this.checkLogin(email, senha);
    }
    else{
      /* Campos inválidos */
      //Campos de validação com a função checkFormStatus exibem a mensagem de erro
      this.loginErrorStatus = LoginErrorStatus.invalidControl; 
    }
  }

  /* Verificação de login */
  checkLogin(email : string, senha : string){
    if(this.userService.validateUser(email, senha)){
      /* Navega para a pagina principal */
      this.loginErrorStatus = LoginErrorStatus.None;
      this.router.navigate(['']);
    }
    else{
      /* Usuário inexistente */
      this.loginErrorStatus = LoginErrorStatus.invalidUser;
    }
  }

  /* Método para verificar status do enum (LoginErrorStatus.enum) */
  checkIfFormError(status : string) : boolean{
    /* Recebe o valor do enum (em string) e compara com o estado atual do formulário, se forem iguais, retorna true */
    return this.loginErrorStatus == status
  }
 
  ngOnInit() {
    // Detectando mudanças no campo 'email' e 'senha'
    this.formLogin.controls.email.valueChanges.subscribe(() => {
      // Limpando o erro quando o usuário alterar o valor do campo 'email'
      this.loginErrorStatus = LoginErrorStatus.None;
    });

    this.formLogin.controls.senha.valueChanges.subscribe(() => {
      // Limpando o erro quando o usuário alterar o valor do campo 'senha'
      this.loginErrorStatus = LoginErrorStatus.None;
    });
  }
}
