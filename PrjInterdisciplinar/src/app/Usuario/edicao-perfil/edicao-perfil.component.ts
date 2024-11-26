import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormFieldComponent } from '../../Common/form-field/form-field.component';
import { UserService } from '../../Services/user.service';
import { ViacepService } from '../../Services/viacep.service';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IFieldForm } from '../../models/fieldForm.model';
import { CadastroErrorStatus } from '../../Login/form-cadastro/CadastroErrorStatus.enum';

@Component({
  selector: 'app-edicao-perfil',
  standalone: true,
  imports: [CommonModule, FormFieldComponent, ReactiveFormsModule],
  templateUrl: './edicao-perfil.component.html',
  styleUrl: './edicao-perfil.component.css'
})
export class EdicaoPerfilComponent {
  protected cadastroErrorStatus : CadastroErrorStatus = CadastroErrorStatus.None;
  private formBuilderService = inject(NonNullableFormBuilder);
  private userService = inject(UserService);
  private viacepService = inject(ViacepService);

  formName : string = "cadastro"; //Nome do formulário para concatenar ao nome do control (email-cadastro)
  passwordMinLength = 6;

  protected formCadastro = this.formBuilderService.group({
    nome : ['',[Validators.required, Validators.minLength(2)]],
    email : ['', [Validators.required, Validators.email]],
    senha : ['', [Validators.required, Validators.minLength(this.passwordMinLength)]],
    confirmaSenha : ['', [Validators.required, Validators.minLength(this.passwordMinLength)]],
    telefone : ['', [Validators.minLength(11), Validators.maxLength(11)]], //Opcional
    cpf: ['',[Validators.minLength(11), Validators.maxLength(11)]],
    cep : ['', [Validators.minLength(8), Validators.maxLength(8)]],  //Opcional
    numero : [''],  //Opcional
    logradouro : [''],  //Opcional
    bairro : [''],  //Opcional
    localidade : [''],  //Opcional
    complemento : ['']
  });
  inputs : IFieldForm[] = [
    {
      controlName:'nome',
      type : 'text',
      icon:'assets/login/usuario_icon.svg',
      label:'Nome:',
      placeholder: 'Nome de usuário',
      required: true,
      validators: ['required','minlength']
    },
    {
      controlName:'email',
      type : 'email',
      icon:'assets/login/email_icon.svg',
      label:'Email:',
      placeholder: 'Email de usuário',
      required: true,
      validators: ['required','email']
    },
    {
      controlName:'senha',
      type : 'password',
      icon:'assets/login/senha_icon.svg',
      label:'Senha:',
      placeholder: 'Senha de login',
      required: true,
      validators: ['required','minlength']
    },
    {
      controlName:'confirmaSenha',
      type : 'password',
      icon:'assets/login/senha_icon.svg',
      label:'Confirme sua senha:',
      placeholder: 'Confirmação da senha',
      required: true,
      validators: ['required','minlength']
    },
    {
      controlName:'telefone',
      type : 'tel',
      icon:'assets/login/telefone_icon.svg',
      label:'Telefone:',
      placeholder: 'Telefone para contato',
      required: false,
      validators: ['minlength', 'maxlength']
    },
    {
      controlName:'cpf',
      type : 'text',
      icon:'assets/login/cpf_icon.svg',
      label:'CPF:',
      placeholder: 'Digite seu CPF',
      required: false,
      validators: ['minlength', 'maxlength']
    }
  ];

  addressInputs : IFieldForm[] = [
    {
      controlName:'cep',
      type : 'text',
      icon:'assets/login/endereco_icon.svg',
      label:'CEP:',
      placeholder: 'Digite seu CEP',
      required: false,
      validators: ['minlength', 'maxlength']
    },
    {
      controlName:'logradouro',
      type : 'text',
      icon:'assets/login/endereco_icon.svg',
      label:'Rua:',
      placeholder: 'Digite sua rua',
      required: false,
    },
    {
      controlName:'bairro',
      type : 'text',
      icon:'assets/login/endereco_icon.svg',
      label:'Bairro:',
      placeholder: 'Digite seu bairro',
      required: false,
    },
    {
      controlName:'localidade',
      type : 'text',
      icon:'assets/login/endereco_icon.svg',
      label:'Cidade:',
      placeholder: 'Digite sua cidade',
      required: false,
    },
    {
      controlName:'numero',
      type : 'text',
      icon:'assets/login/endereco_icon.svg',
      label:'Número:',
      placeholder: 'Digite seu número',
      required: false,
    },
    {
      controlName:'complemento',
      type : 'text',
      icon:'assets/login/endereco_icon.svg',
      label:'Complemento:',
      placeholder: 'Digite seu complemento',
      required: false,
    },
  ];

    /* Método para verificar status do enum (CadastroErrorStatus.enum) */
    checkIfFormError(status : string) : boolean{
      /* Recebe o valor do enum (em string) e compara com o estado atual do formulário, se forem iguais, retorna true */
      return this.cadastroErrorStatus == status
    }

  onSubmit() {
    if(this.formCadastro.valid){
      console.log("Formulário editado com sucesso")
    }
  }
}
