import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.css'
})
export class FormFieldComponent{
  protected showPassword : boolean = false;
  @Input() formGroup !: FormGroup; //Form gruop utilizado no componente pai
  @Input() formName : string = 'form'; //Usado para concatenar ao nome do campo para gerar names e ids diferentes (controlName + '-' + formName)
  @Input() controlName!: string; //Nome do campo
  @Input() label!: string; //Nome exibido na label
  @Input() icon !: string; //Icone do input
  @Input() type: string = 'text'; //Tipo do input
  @Input() placeholder!: string;  //Placeholder do input
  @Input() required !: boolean; //Se o campo é obrigatório (serve para adicionar o asterisco* como forma visual de separar obrigatórios de opcionais)
  @Input() fieldType : string = 'input';

  @Input() validators : string[] = []; //Select, input ou textarea

  /*Retorna a mensagem correspondente ao tipo de validação que os campos possuem
    erro -> string obtida pelo ngFor, obtida da lista de erros passada pelo componente pai em errorValidator
  */
  getErrorMessage(erro : string) : string{
    switch (erro) {
      case 'required':
        return 'Campo obrigatório'

      case 'minlength':
        let minValue = this.formGroup.get(this.controlName)?.errors?.['minlength']?.requiredLength;
        //let minValue = this.formGroup.get(this.controlName)?.errors?.['minlength']?.requiredLength;
        return `Deve ser maior ou igual a ${minValue} ${minValue > 1 ? 'caracteres' : 'caractere'}`

      case 'maxlength':
        let maxValue = this.formGroup.get(this.controlName)?.errors?.['maxlength']?.requiredLength;
        //let maxValue = this.formGroup.get(this.controlName)?.errors?.['maxlength']?.requiredLength;
        return `Deve ser menor ou igual a ${maxValue} ${maxValue > 1 ? 'caracteres' : 'caractere'}`

      case 'email':
        return `Email inválido`

      default:
        return 'Tipo de validação não especificada'
    }
  }

  changeType(){
    this.showPassword = !this.showPassword;
    if(this.showPassword){
      this.type = 'text';
    }
    else{
      this.type = 'password';
    }
  }
}
