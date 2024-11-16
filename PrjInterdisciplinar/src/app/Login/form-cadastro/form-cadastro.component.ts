import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ViacepService } from './viacep.service';

@Component({
  selector: 'app-form-cadastro',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css', '../links-redes.css']
})
export class FormCadastroComponent {
  exibirCamposEndereco = false;
  cep : string = "";
  // endereco : Endereco = {bairro: "", cidade: "", rua: ""};

  // constructor(private viacepService : ViacepService){}

  // buscarCep(){
  //   this.viacepService.buscarEndereco(this.cep).subscribe({
  //     next: (endereco : any) => {
  //       alert(endereco);
  //     },
  //     error: (err : any) => {
  //       console.error('Erro ao buscar o endereço:', err);
  //     }
  //   });
  // }

  // buscarCep(){
  //   this.viacepService.getList().subscribe({
  //     next: (response : any) => {
  //       this.endereco.rua = response.logradouro;
  //       this.endereco.bairro = response.bairro;
  //       this.endereco.cidade = response.localidade;
  //       alert(this.endereco);
  //     },
  //     error: (err : any) => {
  //       console.log("Deu erro" + err);
  //     }
  //   })
  // }
}
