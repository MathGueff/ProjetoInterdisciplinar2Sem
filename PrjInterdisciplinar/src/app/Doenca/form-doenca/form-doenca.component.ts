import { DoencaErrorStatus } from './DoencaErrorStatus.enum';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IDoenca } from '../../models/doencas.model';
import { FormInputComponent } from "../../Common/form-input/form-input.component";
import { DoencaService } from '../../Services/doenca.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-doenca',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormInputComponent, RouterModule],
  templateUrl: './form-doenca.component.html',
  styleUrl: './form-doenca.component.css'
})
export class FormDoencaComponent {
  private doencaErrorStatus : DoencaErrorStatus = DoencaErrorStatus.None;
  private fb = inject(NonNullableFormBuilder);
  private doencaService = inject(DoencaService);
  private router = inject(Router)

  protected formDoenca = this.fb.group({
    nome_doenca : ['', [Validators.required]],
    transmissao : ['', [Validators.required]],
    tratamento : ['', [Validators.required]]
  })

  onSubmit(){
    if(this.formDoenca.valid){
      if(this.doencaService.validateDoenca(this.formDoenca.controls.nome_doenca.value)){
        const newDoenca : IDoenca  = {
          nome_doenca : this.formDoenca.controls.nome_doenca.value,
          transmissao : this.formDoenca.controls.transmissao.value,
          tratamento : this.formDoenca.controls.tratamento.value
        }
        console.log(newDoenca);
        this.doencaService.newDoenca(newDoenca);
        this.router.navigate(['/doenca-inicial']);
      }
      else{
        this.doencaErrorStatus = DoencaErrorStatus.invalidName
      }
    }
    else{
      this.doencaErrorStatus = DoencaErrorStatus.invalidControl
    }
  }

  ngOnInit() {
    // Detecta mudanças nos campos para resetar o status do erro atual
    Object.keys(this.formDoenca.controls).forEach(control => {
      this.formDoenca.get(control)?.valueChanges.subscribe(() => {
        // Limpando o erro quando o usuário alterar o valor do campo 'senha'
        this.doencaErrorStatus = DoencaErrorStatus.None;
      });
    });
  }

  checkIfFormError(status : string) : boolean{
    /* Recebe o valor do enum (em string) e compara com o estado atual do formulário, se forem iguais, retorna true */
    return this.doencaErrorStatus == status
  }
}
