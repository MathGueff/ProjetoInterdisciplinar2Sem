import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUser } from "../models/user.model";
import { HttpHeaders } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class UserMockService{
  private http = inject(HttpClient);

  private apiUrl = `https://apimocha.com/sanea-sp/usuarios`;

  public getUsersList() : Observable<IUser[]>{
    return this.http.get<IUser[]>(this.apiUrl);
  }

  public addUserToList(newUser: IUser): void {
    this.http.post(this.apiUrl, newUser).subscribe({
      next: (response) => {
        console.log('Usuário adicionado com sucesso:', response); 
      },
      error: (err) => {
        console.error('Erro ao adicionar usuário:', err);
      },
    });
  }
}
