import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css', '../links-redes.css']
})
export class FormLoginComponent{
  private formBuilderService = inject(NonNullableFormBuilder);

  protected formLogin = this.formBuilderService.group({
    email : ['', [Validators.required, Validators.email]],
    senha : ['', [Validators.required, Validators.minLength(10)]]
  })

  onChange(campo : string){
    const control  = this.formLogin.get(campo);
    if(control && control.valid){
      alert(campo + " foi preenchido com sucesso")
    }
    else{
      alert(campo + " não foi preenchido com sucesso")
    }
  }

  onSubmit(){
    if(this.formLogin.valid){
      alert("O formulário foi preenchido com sucesso");
    }
    else{
      alert("Campos inválidos")
    }
  }
}
