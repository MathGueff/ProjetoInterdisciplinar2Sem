import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reclamacao-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reclamacao-form.component.html',
  styleUrl: './reclamacao-form.component.css',
})
export class ReclamacaoFormComponent {
  private formBuider = inject(NonNullableFormBuilder);

  form = this.formBuider.group({
    titulo: ['', [Validators.required]],
    descricao: ['', [Validators.required]],
    cep: ['', [Validators.required]],
    numero: ['', [Validators.required]],
    cidade: ['', [Validators.required]],
    bairro: ['', [Validators.required]],
    rua: ['', [Validators.required]],
    tag: ['Nenhum'],
    imagem: [''],
  });

  onSubmit() {
    if(this.form.valid){
      console.log(this.form.value)
    }
  }
}
