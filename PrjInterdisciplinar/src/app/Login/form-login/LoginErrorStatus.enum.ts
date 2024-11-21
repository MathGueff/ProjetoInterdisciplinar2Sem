 /*
    *None -> Formulário sem problemas
    *invalidControl -> Campo inválido
    *invalidUser -> Usuário inexistente
  */
export enum LoginErrorStatus{
    None = "none", 
    invalidUser = "invalid-user",
    invalidControl = "invalid-control"
}