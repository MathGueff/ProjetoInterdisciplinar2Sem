import { DoencaErrorStatus } from './DoencaErrorStatus.enum';
import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IDoenca } from '../../models/doencas.model';
import { DoencaService } from '../../Services/doenca.service';
import { Router, RouterModule } from '@angular/router';
import { IFieldForm } from '../../models/fieldForm.model';
import { FormFieldComponent } from "../../Common/form-field/form-field.component";
import { CheckErrorComponent } from "../../Common/check-error/check-error.component";

@Component({
  selector: 'app-form-doenca',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FormFieldComponent, CheckErrorComponent],
  templateUrl: './form-doenca.component.html',
  styleUrl: './form-doenca.component.css'
})
export class FormDoencaComponent {
  //Injeção de Dependências
  private fb = inject(NonNullableFormBuilder);
  private doencaService = inject(DoencaService);
  private router = inject(Router)

  protected doencaErrorStatus : DoencaErrorStatus = DoencaErrorStatus.None; //Var de erros
  protected sintomas : string[] = []; //Sintomas adicionados
  protected fontes : string[] = []; //Fontes adicionadas
  protected imagens : string[] = []; //Imagens adicionadas
  
  src: any = null; // src atual para preview

  protected formDoenca = this.fb.group({
    nome_doenca : ['', [Validators.required]],
    descricao : ['', [Validators.required, Validators.minLength(15)]],
    transmissao : ['', [Validators.required]],
    tratamento : ['', [Validators.required]],
    sintoma : [''],
    imagem : [''],
    fonte : [''],
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

  ngOnInit() {
    this.resetErrorStatus();
  }

  onSubmit(){
    if(this.isFormValid()){
      if(this.doencaService.validateDoenca(this.formDoenca.controls.nome_doenca.value)){
        this.createNewDoenca();
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

  onEnter(event: Event, type: string): void {
    // Previne o comportamento padrão (envio automático do formulário)
    event.preventDefault();
  
    // Adiciona dependendo do tipo de campo
    if (type === 'sintoma') {
      this.addSintoma();
    } else if (type === 'fonte') {
      this.addFonte();
    }
  }

  createNewDoenca(){
    const newDoenca : IDoenca  = {
      id : this.doencaService.getCurrentID(),
      nome_doenca : this.formDoenca.controls.nome_doenca.value,
      descricao : this.formDoenca.controls.descricao.value,
      transmissao : this.formDoenca.controls.transmissao.value,
      tratamento : this.formDoenca.controls.tratamento.value,
      sintomas : this.sintomas,
      fontes_doenca : this.fontes,
      imagens_doenca : this.imagens
    }
    console.log(newDoenca);
    this.doencaService.newDoenca(newDoenca);
  }

  private isFormValid(): boolean {
    return this.formDoenca.valid &&
      this.sintomas.length > 0 &&
      this.fontes.length > 0 &&
      this.imagens.length > 0;
  }

  //#region Sintomas
  addSintoma(){
    const sintoma = this.formDoenca.controls.sintoma;
    if(sintoma.valid && sintoma.value != ""){
      let sintoma_novo = sintoma.value;
      sintoma_novo = sintoma_novo.trim();
      sintoma_novo = sintoma_novo[0].toUpperCase() + sintoma_novo.slice(1).toLowerCase()
      if(1 == 1){
        sintoma.reset();
        this.sintomas.push(sintoma_novo);
      }
      else{
        this.doencaErrorStatus = DoencaErrorStatus.invalidSintoma;
      }
    }
    else{
      this.doencaErrorStatus = DoencaErrorStatus.nullSintoma;
    }
  }

  removeSintoma(sintoma_excluido : string){
    const i = this.sintomas.indexOf(sintoma_excluido);  

    if (i !== -1) {
      this.sintomas.splice(i, 1);  
    }
  }
  //#endregion 

  //#region Fontes
  addFonte(){
    const fonte = this.formDoenca.controls.fonte;
    if(fonte.valid && fonte.value != ""){
      let fonte_novo = fonte.value;
      fonte_novo = fonte_novo.trim();
      if(!this.fontes.some((fonte) => fonte == fonte_novo )){
        fonte.reset();
        this.fontes.push(fonte_novo);
      }
      else{
        this.doencaErrorStatus = DoencaErrorStatus.invalidFonte;
      }
    }
    else{
      this.doencaErrorStatus = DoencaErrorStatus.nullFonte;
    }
  }

  removeFonte(fonte_excluida : string){
    const i = this.fontes.indexOf(fonte_excluida);  
    if (i !== -1) {
      this.fontes.splice(i, 1);  
    }
  }
  //#endregion
  
  //#region Imagens
  protected setPreview(event: any){
    const file:File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.src = e.target.result;
        const imageName = file.name;
        this.imagens.push(imageName); 
      };
      reader.readAsDataURL(file);
    }
  }

  protected removePreview(){
    this.formDoenca.controls.imagem.reset();
    this.src = null;
    this.imagens = [];
  }
  //#endregion

  resetErrorStatus(){
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
