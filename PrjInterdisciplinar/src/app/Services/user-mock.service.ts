import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable, catchError, of } from "rxjs";
import { IUser } from "../models/user.model";

@Injectable({ providedIn: "root" })
export class UserMockService {
  private http = inject(HttpClient);
  private apiUrl = `https://apimocha.com/sanea-sp/usuarios`;

  public getUsersList(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error("Erro ao buscar usuários:", error);
        // Retorna uma lista vazia como fallback
        return of([]);
      })
    );
  }

  public addUserToList(newUser: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.apiUrl, newUser).pipe(
      catchError((error) => {
        console.error("Erro ao adicionar usuário:", error);
        // Retorna um observable vazio para continuar a execução
        return of(newUser);
      })
    );
  }
}
