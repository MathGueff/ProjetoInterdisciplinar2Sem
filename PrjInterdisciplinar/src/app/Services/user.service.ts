import { Injectable } from '@angular/core';
import { IUser } from '../models/usuario.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class UserService {
    private users : IUser[] = [
        {nome : "Matheus A", senha: "123456", email: "ma@gmail.com"},
        {nome : "Matheus G", senha: "123456", email: "th@gmail.com"}
    ]

    /* Observable para avisar quando um novo usuário é logado */
    private userAtivoSubject = new BehaviorSubject<IUser | null>(null);
    userAtivo$: Observable<IUser | null> = this.userAtivoSubject.asObservable();
    
    /* Validação de Usuário */
    validateUser(email : string, senha : string) : boolean{
        const findUser = this.users.find(
            (user) => user.email === email && user.senha === senha
        );
        if(findUser){
            this.userAtivoSubject.next(findUser);
            return true;
        }
        /* Caso não tenha achado um usuário com email e senha fornecidos */
        return false;
    }
    
    /* Adquire Usuário atual logado */
    getCurrentUser() : IUser | null{
        return this.userAtivoSubject.value;
    }

    /* Criação de um novo usuário */
    newUser(newUser : IUser){
        if(!this.checkIfUserExists(newUser)){
            /* Caso não haja usuário com esse email */
            this.users.push(newUser);
            console.log(this.users);
        }
        else{
            alert("Usuário já existe");
        }
    }

    /* Verificação de usuário existente */
    checkIfUserExists(newUser : IUser) : boolean{
        return this.users.some((user) => {
            user.email === newUser.email;
        })
    }
}