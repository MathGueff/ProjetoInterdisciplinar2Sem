import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUser } from "../models/usuario.model";

@Injectable({providedIn: 'root'})

export class UserMockService{
  constructor(private http : HttpClient){}

  public getUsersList() : Observable<IUser>{
      let apiUrl = `https://apimocha.com/saneasp/usuarios`;
      return this.http.get<IUser>(apiUrl);
  }
}
