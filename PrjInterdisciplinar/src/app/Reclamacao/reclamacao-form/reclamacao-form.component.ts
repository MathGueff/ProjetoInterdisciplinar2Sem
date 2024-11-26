import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ViacepService } from '../../Services/viacep.service';

@Component({
  selector: 'app-reclamacao-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reclamacao-form.component.html',
  styleUrl: './reclamacao-form.component.css',
})
export class ReclamacaoFormComponent implements OnInit {
  private formBuider = inject(NonNullableFormBuilder);
  private router = inject(Router);
  private viacepService = inject(ViacepService);

  rows: number = 2;
  src: any = null;


  form = this.formBuider.group({
    titulo: ['', [Validators.required]],
    descricao: ['', [Validators.required]],
    cep: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(8)],
    ],
    numero: ['', [Validators.required]],
    cidade: ['', [Validators.required]],
    bairro: ['', [Validators.required]],
    rua: ['', [Validators.required]],
    complemento: [''],
    tag: ['Nenhum'],
    imagem: [''],
  });

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.router.navigate(['reclamacao-inicial']);
    }
  }
  ngOnInit(): void {
    this.form.controls.cep.valueChanges.subscribe(() => {
      if (
        this.form.controls.cep.valid &&
        this.form.controls.cep.value.length == 8) {
        this.searchAddress();
      } else {
        console.log('CEP INVÁLIDO');
        this.resetAddressControls();
      }
    });
  }
  searchAddress() {
    this.viacepService.getAddress(this.form.controls.cep.value).subscribe({
      next: (response) => {
        if (response.logradouro) {
          this.setAddressControl('rua', response.logradouro);
        } else {
          console.log('A rua não foi encontrada para o CEP informado.');
        }

        if (response.bairro) {
          this.setAddressControl('bairro', response.bairro);
        } else {
          console.log('O logradouro não foi encontrado para o CEP informado.');
        }

        if (response.localidade) {
          this.setAddressControl('cidade', response.localidade);
        } else {
          console.log('A cidade não foi encontrada para o CEP informado.');
        }
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  resetAddressControls() {
    let addressControls = ['rua', 'bairro', 'cidade'];
    addressControls.forEach((field) => {
      this.form.get(field)!.reset();
    });
  }

  private setAddressControl(control: string, value: string) {
    this.form.get(control)?.setValue(value);
  }
  protected autoResize():void {
    let objTextArea = document.querySelector('textarea');
    if (objTextArea?.value) {
      if (objTextArea.scrollHeight >= objTextArea.offsetHeight) {
        this.rows += 1;
        console.log("Scroll Height: "+ objTextArea.scrollHeight);
        console.log("offsetHeight: "+ objTextArea.offsetHeight);
      }
    } else {
      this.rows = 2;
    }
  }
  protected setPreview(event: any){
    const file:File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.src = e.target.result;

      };
      reader.readAsDataURL(file);
    }
  }
  Voltar(){
    this.router.navigate(['reclamacao-inicial']);
  }
}
