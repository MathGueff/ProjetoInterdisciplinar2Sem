import { IUser } from './../models/user.model';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserMockService } from './user-mock.service';

@Injectable({providedIn: 'root'})

export class UserService {
    private userMockService = inject(UserMockService);

    private users : IUser[] = []

    constructor() {
        // Carrega os usuários ao inicializar o serviço
        this.loadUsers();
    }

    // Método para carregar usuários da API
    private loadUsers(): void {
        this.userMockService.getUsersList().subscribe({
            next: (response: any) => {
                this.users = response.usuarios || []; // Garante que "usuarios" exista
                console.log(this.users);
            },
            error: (err: any) => {
                console.error('Erro ao buscar usuários:', err);
            }
        });
    }

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
        this.userMockService.addUserToList(newUser); //Método POST
        this.users.push(newUser);
        console.log(this.users);
    }

    /* Verificação de usuário existente */
    checkIfUserExists(newUser : IUser) : boolean{
        return this.users.some(user => user.email === newUser.email);
    }

    getCurrentID() : number{
        return this.users.length + 1
    }
    
    // Procura o usuário de acordo com o ID
    getUserId(id:number) : IUser | undefined{
      return this.users.find((user) => id === user.id);
    }

    logout(){
        this.userAtivoSubject.next(null);
    }
}
