export interface IFieldForm{
    controlName : string; //Atributo formControlName do ReactiveForm
    type ?: string //Caso seja input, para especificar o tipo de input (text, number)
    icon : string; //Caminho para a imagem
    label : string; //Label do campo
    placeholder : string; //Placeholder do campo
    required ?: boolean; //Adição de estilo para campo obrigatório caso seja true (adiciona "*" no label)
    validators ?: string[] //Todas as validações que o campo possui, para exibição dos erros de valid;
    typeField ?: string //Textarea, input ou select;
}