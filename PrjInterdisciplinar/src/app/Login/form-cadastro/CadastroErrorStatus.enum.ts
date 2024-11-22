 /*
    *None -> Formulário sem problemas
    *invalidControl -> Campo inválido
    *nvalidPassword -> Senhas não coincidem
  */
    export enum CadastroErrorStatus{
        None = "none",
        invalidPassword = "invalid-password",
        invalidControl = "invalid-control",
        userExists = "user-exists"
    }
