import { Injectable } from '@angular/core';
import { IUser } from '../models/usuario.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class userService {
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
        if(this.userAtivoSubject){
            return this.userAtivoSubject.getValue();
        }
        return null;
    }

    /* Criação de um novo usuário */
    newUser(newUser : IUser){
        this.users.push(newUser);
        console.log(this.users);
    }
}