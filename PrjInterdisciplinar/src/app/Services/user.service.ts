import { IUser } from './../models/user.model';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { UserMockService } from './user-mock.service';
import { AdminService } from './admin.service';
import { IAdmin } from '../models/admin.model';

@Injectable({ providedIn: 'root' })
export class UserService {

  //Injeção de Dependências
  private userMockService = inject(UserMockService);
  private users: IUser[] = [];
  private adminService = inject(AdminService);
  
  constructor() {
    // Carrega os usuários ao inicializar o serviço
    this.loadUsers();

    // this.users = [
    //   { nome: 'Matheus', email: 'gueff@gmail.com', id: 1, senha: 'matheus' },
    // ];

    // Verificando se o usuário ativo é admin
    this.userAtivo$.subscribe((user) => {
        if (user) {
          this.checkIfAdmin(user);
        } else {
          this.adminSubject.next(null); // Nenhum usuário ativo implica não é admin
        }
      });
  }

  // Método para carregar usuários da API
  private loadUsers(): void {
    this.userMockService.getUsersList().subscribe({
      next: (response: IUser[]) => {
        if (response.length > 0) {
          this.users = response;
        } else {
          console.warn('Nenhum usuário encontrado, carregando fallback.');
          this.loadFallbackUsers(); // Para caso da API dar problema
        }
      },
      error: (err: unknown) => {
        console.error('Erro ao buscar usuários da API:', err);
        this.loadFallbackUsers(); 
      },
    });
  }
  
  /* Método para carregar usuários padrão caso a API falhe */
  private loadFallbackUsers(): void {
    this.users = [
      { nome: 'Matheus', email: 'gueff@gmail.com', id: 1, senha: 'matheus' },
    ];
    console.warn('Usando dados de fallback.');
  }


  /* Observable para avisar quando um novo usuário é logado */
  private userAtivoSubject = new BehaviorSubject<IUser | null>(null);
  userAtivo$: Observable<IUser | null> = this.userAtivoSubject.asObservable();

   // Observable para rastrear se o usuário atual é admin
   private adminSubject = new BehaviorSubject<IAdmin | null>(null);
   admin$: Observable<IAdmin | null> = this.adminSubject.asObservable();

  //#region Login e Cadastro
  
  public fazerLogin(user: IUser) {
    this.userAtivoSubject.next(user);
  }

  public logout() {
    this.userAtivoSubject.next(null);
  }
  
  /* Criação de um novo usuário */
  public newUser(newUser: IUser) {
    //this.userMockService.addUserToList(newUser); //Método POST
    this.users.push(newUser);
    console.log(this.users);
  }

  //#endregion

  //#region Validação

  /* Verifica se o usuário com o email e senha passados existe */
  public validateUser(email: string, senha: string): boolean {
    const findUser = this.users.find(
      (user) => user.email === email && user.senha === senha
    );
    if (findUser) {
      this.fazerLogin(findUser);
      return true;
    }
    /* Caso não tenha achado um usuário com email e senha fornecidos */
    return false;
  }

  //* Verifica se já existe um usuário com esse email*/
  public checkEmailExists(newUser: IUser): boolean {
    return this.users.some((user) => user.email === newUser.email);
  }

  //#endregion

  //#region Getters

  /* Pega todos os usuários existentes */
  public getAllUsers(): IUser[] {
    return this.users;
  }

  /* Pega a contagem atual do ID */
  public getCurrentID(): number {
    return this.users.length + 1;
  }

  /* Adquire o IUser atual logado */
  public getCurrentUser(): IUser | null {
    return this.userAtivoSubject.value;
  }

  // Procura um usuário de acordo com o ID
  public findUserById(id: number): Observable<IUser> {
    const user = this.users.find((user) => id === user.id);
    if (user) {
      return of(user);
    } else {
      throw new Error('Usuário não encontrado');
    } 
  }

  //#endregion

  //#region Verificação de Admin

  private checkIfAdmin(user: IUser): void {
    this.adminService.isAdmin(user.id).subscribe({
      next: (admin: IAdmin | null) => {
        this.adminSubject.next(admin);
      },
      error: (err: any) => {
        console.error('Erro ao verificar se é admin:', err);
        this.adminSubject.next(null); // Em caso de erro, presume-se que não é admin
      },
    });
  }

  //#endregion
}
