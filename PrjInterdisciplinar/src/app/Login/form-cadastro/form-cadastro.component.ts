import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormInputComponent } from "../../Common/form-input/form-input.component";
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { IUser } from '../../models/usuario.model';
import { IEndereco } from '../../models/endereco.model';
import { CadastroErrorStatus } from './CadastroErrorStatus.enum';
import { ViacepService } from '../../Services/viacep.service';

@Component({
  selector: 'app-form-cadastro',
  standalone: true,
  imports: [RouterLink, CommonModule, FormInputComponent, ReactiveFormsModule],
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css', '../links-redes.css']
})
export class FormCadastroComponent implements OnInit{
  private formBuilderService = inject(NonNullableFormBuilder);
  private router = inject(Router);
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
  })

  protected cadastroErrorStatus : CadastroErrorStatus = CadastroErrorStatus.None;
   /*
    *None -> Formulário sem problemas
    *invalidControl -> Campo inválido
    *invalidUser -> Usuário inexistente
    *userExists -> Usuário já existente com o email fornecido
  */

  onSubmit(){
    if(this.formCadastro.valid){  //Caso o formulário seja válido
      let senha = this.formCadastro.controls.senha.value;
      let confirmSenha = this.formCadastro.controls.confirmaSenha.value;

      if(senha === confirmSenha){
        //Interface de endereço para guardar as informações de endereço
        const userAddress : IEndereco = {
          cep : this.formCadastro.controls.cep.value,
          bairro : this.formCadastro.controls.bairro.value,
          logradouro : this.formCadastro.controls.logradouro.value,
          cidade : this.formCadastro.controls.localidade.value,
          numero : this.formCadastro.controls.numero.value,
          complemento : this.formCadastro.controls.complemento.value
        }

        //Interface de usuário para guardar as informações do usuário e passar para o userService
        const newUser : IUser = {
          nome : this.formCadastro.controls.nome.value,
          email : this.formCadastro.controls.email.value,
          senha : this.formCadastro.controls.senha.value,
          endereco : userAddress,
          telefone : this.formCadastro.controls.telefone.value,
          cpf : this.formCadastro.controls.cpf.value
        }

        //Chamando função para verificar se usuário já existe com base no email
        if(!this.userService.checkIfUserExists(newUser)){
          //Caso não haja usuário, cadastra um novo com os dados preenchidos
          this.userService.newUser(newUser);
          //Retorna à pagina de login para que o usuário possa logar
          this.router.navigate(['/login']);
        }
        else {
          //Informa erro de usuário existente
          this.cadastroErrorStatus = CadastroErrorStatus.userExists;
        }
      }
      else{
        //Informa erro de senhas não coincidentes
        this.cadastroErrorStatus = CadastroErrorStatus.invalidPassword;
      }
    }
    else{
      //Informa erro de campos inválidos
      this.cadastroErrorStatus = CadastroErrorStatus.invalidControl;
    }
  }

  /* Método para verificar status do enum (CadastroErrorStatus.enum) */
  checkIfFormError(status : string) : boolean{
    /* Recebe o valor do enum (em string) e compara com o estado atual do formulário, se forem iguais, retorna true */
    return this.cadastroErrorStatus == status
  }

  ngOnInit() {
    // Detecta mudanças nos campos para resetar o status do erro atual
    Object.keys(this.formCadastro.controls).forEach(control => {
      if(control != "cep"){
        this.formCadastro.get(control)?.valueChanges.subscribe(() => {
          // Limpando o erro quando o usuário alterar o valor do campo 'senha'
          this.cadastroErrorStatus = CadastroErrorStatus.None;
        });
      }
    });

    //VIACEP
    this.formCadastro.controls.cep.valueChanges.subscribe(() => {
      if(this.formCadastro.controls.cep.valid && this.formCadastro.controls.cep.value.length == 8){
        this.searchAddress();
      }
      else{
        console.log("CEP INVÁLIDO")
        this.resetAddressControls();
      }
    });
  }

  searchAddress(){
      this.viacepService.getAddress(this.formCadastro.controls.cep.value).subscribe({
        next: (response) => {
          if (response.logradouro) {
            this.setAddressControl('logradouro', response.logradouro);
          } else {
            console.log("O logradouro não foi encontrado para o CEP informado.");
          }

          if (response.bairro) {
            this.setAddressControl('bairro', response.bairro);
          } else {
            console.log("O logradouro não foi encontrado para o CEP informado.");
          }

          if (response.localidade) {
            this.setAddressControl('localidade', response.localidade);
          } else {
            console.log("O logradouro não foi encontrado para o CEP informado.");
          }

        },
        error: (e) =>  {
          console.log(e);
        }
      })
  }

  resetAddressControls() {
  let addressControls = ['logradouro', 'bairro', 'localidade'];
  addressControls.forEach((field) => {
    this.formCadastro.get(field)!.reset();
  });
}

  private setAddressControl(control : string, value : string){
    this.formCadastro.get(control)?.setValue(value)
  }
}
