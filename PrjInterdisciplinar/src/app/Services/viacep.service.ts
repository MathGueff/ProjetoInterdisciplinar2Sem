import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface viacepAddress{
    logradouro : string,
    bairro : string,
    localidade : string
}

@Injectable({providedIn: 'root'})

export class ViacepService{

    constructor(private http : HttpClient){}
    public getAddress(cep : string) : Observable<viacepAddress>{
        let apiUrl = `https://viacep.com.br/ws/${cep}/json/`;
        return this.http.get<viacepAddress>(apiUrl);
    }
}
