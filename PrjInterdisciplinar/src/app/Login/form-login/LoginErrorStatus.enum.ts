 /*
    *None -> Formulário sem problemas
    *invalidControl -> Campo inválido
    *invalidUser -> Usuário inexistente
    *userValidated -> Usuário foi validado
  */
export enum LoginErrorStatus{
    None = "none", 
    invalidUser = "invalid-user",
    invalidControl = "invalid-control"
}