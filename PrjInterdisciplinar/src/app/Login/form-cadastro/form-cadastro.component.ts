import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ViacepService } from './viacep.service';

@Component({
  selector: 'app-form-cadastro',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './form-cadastro.component.html',
  styleUrl: './form-cadastro.component.css'
})
export class FormCadastroComponent {
  exibirCamposEndereco = false;
  cep : string = "";

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
}
