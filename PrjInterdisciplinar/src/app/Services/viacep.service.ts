import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface viacepAddress{
    logradouro : string, //rua
    bairro : string,
    localidade : string //No viacep cidade é localidade
}

@Injectable({providedIn: 'root'})

export class ViacepService{
    constructor(private http : HttpClient){}
    public getAddress(cep : string) : Observable<viacepAddress>{
        let apiUrl = `https://viacep.com.br/ws/${cep}/json/`;
        return this.http.get<viacepAddress>(apiUrl);
    }
}
