import { DoencaErrorStatus } from './DoencaErrorStatus.enum';
import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IDoenca } from '../../models/doencas.model';
import { DoencaService } from '../../Services/doenca.service';
import { Router, RouterModule } from '@angular/router';
import { IFieldForm } from '../../models/fieldForm.model';
import { FormFieldComponent } from "../../Common/form-field/form-field.component";

@Component({
  selector: 'app-form-doenca',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FormFieldComponent],
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
    descricao : ['', [Validators.required, Validators.minLength(15)]],
    transmissao : ['', [Validators.required]],
    tratamento : ['', [Validators.required]]
  })

  //Configuração dos inputs do formulário

  inputs : IFieldForm[] = [
    {
      controlName:'nome_doenca', 
      icon:'assets/icones/icon_black_doenca.svg', 
      label:'Nome da Doença:', 
      placeholder: 'Digite o nome da Doença', 
      required: true, 
      validators: ['required','minlength']
    },
    {
      controlName:'descricao', 
      icon:'img/paginas/reclamacoes/description-icon.svg', 
      label:'Descrição da Doença:', 
      placeholder: 'Breve descrição da doença', 
      required: true, 
      validators: ['required','minlength'],
      typeField: 'textarea',
    },
    {
      controlName:'tratamento', 
      icon:'assets/icones/icon_black_doenca.svg', 
      label:'Tratamento:', 
      placeholder: 'Explique como a doença é tratada', 
      required: true, 
      validators: ['required']
    },
    {
      controlName:'transmissao', 
      icon:'assets/icones/icon_black_doenca.svg', 
      label:'Transmissão:', 
      placeholder: 'Explique como a doença é transmitida', 
      required: true, 
      validators: ['required']
    },
  ];

  onSubmit(){
    if(this.formDoenca.valid){
      if(this.doencaService.validateDoenca(this.formDoenca.controls.nome_doenca.value)){
        const newDoenca : IDoenca  = {
          id : this.doencaService.getCurrentID(),
          nome_doenca : this.formDoenca.controls.nome_doenca.value,
          descricao : this.formDoenca.controls.descricao.value,
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
