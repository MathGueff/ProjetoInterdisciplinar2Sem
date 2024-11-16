import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.css'
})
export class FormInputComponent {
  @Input() formGroup !: FormGroup; 
  @Input() formName !: string;
  @Input() controlName!: string; //Nome do campo
  @Input() label!: string; //Nome exibido na label
  @Input() icon !: string; //Icone do input
  @Input() type: string = 'text'; //Tipo do input
  @Input() placeholder!: string;  //Placeholder do input
  @Input() required !: boolean; //Se o campo é obrigatório (serve para adicionar o asterisco* como forma visual de separar obrigatórios de opcionais)
}
