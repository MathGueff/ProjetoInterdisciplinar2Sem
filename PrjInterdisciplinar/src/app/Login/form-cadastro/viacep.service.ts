import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap } from 'rxjs';
import { Endereco } from './endereco.model';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class ViacepService {
    // private enderecoSubject$ = new BehaviorSubject<Endereco | null>(null);
    
    // obterEndereco(){
    //     return this.enderecoSubject$.asObservable();
    // }

    // constructor(private http: HttpClient) {}

    // buscarEndereco(cep: string) {
    //   // Realiza a requisição para a API Viacep
    //   const url = `https://viacep.com.br/ws/${cep}/json/`;
    //   return this.http.get<Endereco>(url).pipe(
    //     tap((endereco) => {
    //       // Atualiza o BehaviorSubject com os dados obtidos da API
    //       this.enderecoSubject$.next(endereco);
    //     }),
    //     catchError((error) => {
    //         this.enderecoSubject$.next(null);
    //         throw error;
    //     })
    //   );
    // }
}