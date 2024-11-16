import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormInputComponent } from "../../Common/form-input/form-input.component";
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { IUser } from '../../models/usuario.model';
import { IEndereco } from '../../models/endereco.model';
import { CadastroErrorStatus } from './CadastroErrorStatus.enum';

@Component({
  selector: 'app-form-cadastro',
  standalone: true,
  imports: [RouterLink, CommonModule, FormInputComponent, ReactiveFormsModule],
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css', '../links-redes.css']
})
export class FormCadastroComponent implements OnInit{
  exibirCamposEndereco = false;

  private formBuilderService = inject(NonNullableFormBuilder);
  private router = inject(Router);
  private userService = inject(UserService);

  protected formCadastro = this.formBuilderService.group({
    nome : ['',[Validators.required, Validators.min(5)]],
    email : ['', [Validators.required, Validators.email]],
    senha : ['', [Validators.required, Validators.minLength(6)]],
    confirmaSenha : ['', [Validators.required, Validators.minLength(6)]],
    telefone : [''],
    cep : [''],
    numero : [''],
    logradouro : [''],
    bairro : [''],
    cidade : [''],
  })

  protected cadastroErrorStatus : CadastroErrorStatus = CadastroErrorStatus.None;

  onSubmit(){
    if(this.formCadastro.valid){  //Caso o formulário seja válido
      let senha = this.formCadastro.controls.senha.value;
      let confirmSenha = this.formCadastro.controls.confirmaSenha.value;

      if(senha === confirmSenha){
        //Chamando função para verificar usuário   
        const userAddress : IEndereco = {
          cep : this.formCadastro.controls.cep.value,
          bairro : this.formCadastro.controls.bairro.value,
          logradouro : this.formCadastro.controls.logradouro.value,
          cidade : this.formCadastro.controls.cidade.value,
        }

        const newUser : IUser = {
          nome : this.formCadastro.controls.nome.value,
          email : this.formCadastro.controls.email.value,
          senha : this.formCadastro.controls.senha.value,
          endereco : userAddress,
          telefone : this.formCadastro.controls.telefone.value,
        }

        if(!this.userService.checkIfUserExists(newUser)){
          this.userService.newUser(newUser);
          this.router.navigate(['/login']); 
        }
        else {
          this.cadastroErrorStatus = CadastroErrorStatus.userExists;
        }

      }
      else{
        this.cadastroErrorStatus = CadastroErrorStatus.invalidPassword;
      }
    }
    else{
      /* Campos inválidos */
      //Campos de validação com a função checkFormStatus exibem a mensagem de erro
      this.cadastroErrorStatus = CadastroErrorStatus.invalidControl; 
    }
  }

  /* Método para verificar status do enum (CadastroErrorStatus.enum) */
  checkIfFormError(status : string) : boolean{
    /* Recebe o valor do enum (em string) e compara com o estado atual do formulário, se forem iguais, retorna true */
    return this.cadastroErrorStatus == status
  }

  ngOnInit() {
    // Detectando mudanças no campo 'email' e 'senha'
    this.formCadastro.controls.email.valueChanges.subscribe(() => {
      // Limpando o erro quando o usuário alterar o valor do campo 'email'
      this.cadastroErrorStatus = CadastroErrorStatus.None;
    });

    this.formCadastro.controls.senha.valueChanges.subscribe(() => {
      // Limpando o erro quando o usuário alterar o valor do campo 'senha'
      this.cadastroErrorStatus = CadastroErrorStatus.None;
    });
  }
}
