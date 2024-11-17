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
export class FormInputComponent{
  @Input() formGroup !: FormGroup; //Form gruop utilizado no componente pai
  @Input() formName : string = 'form'; //Usado para concatenar ao nome do campo para gerar names e ids diferentes (controlName + '-' + formName)
  @Input() controlName!: string; //Nome do campo
  @Input() label!: string; //Nome exibido na label
  @Input() icon !: string; //Icone do input
  @Input() type: string = 'text'; //Tipo do input
  @Input() placeholder!: string;  //Placeholder do input
  @Input() required !: boolean; //Se o campo é obrigatório (serve para adicionar o asterisco* como forma visual de separar obrigatórios de opcionais)

  @Input() errorValidators : string[] = []; //Tipos de erros para o campo (ex required, minlength)

  /*Retorna a mensagem correspondente ao tipo de validação que os campos possuem
    erro -> string obtida pelo ngFor, obtida da lista de erros passada pelo componente pai em errorValidator
  */
  getErrorMessage(erro : string) : string{
    switch (erro) {
      case 'required':
        return 'Campo obrigatório'
    
      case 'minlength':
        let minValue = this.formGroup.get(this.controlName)?.errors?.['minlength']?.requiredLength -1;
        return `Deve ser maior do que ${minValue} ${minValue > 1 ? 'caracteres' : 'caractere'}`

      case 'email':
        return `Email inválido`

      default:
        return 'Erro de validação'
    }
  }
}