import { Component, inject } from '@angular/core';
import { DetalheNoticia } from '../../models/detalhe';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { INoticia } from '../../models/noticias.model';
import { NoticiaService } from '../../Services/noticia.service';

@Component({
  selector: 'app-noticias-detalhes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './noticias-detalhes.component.html',
  styleUrl: './noticias-detalhes.component.css'
})
export class NoticiasDetalhesComponent {
  private noticiaService = inject(NoticiaService)
  Detalhes: INoticia[] = this.noticiaService.getNoticias();
  private DetalheSubject = new BehaviorSubject<INoticia | undefined>(undefined);
  dado$: Observable<INoticia | undefined> = this.DetalheSubject.asObservable();
  constructor(private activedrouter : ActivatedRoute){}
  ngOnInit(): void {

  this.activedrouter.params.subscribe( (parametros) =>{
    const idParametro = Number(parametros['id']);

    const detalhes = this.Detalhes.find((Detalhes) => Detalhes.id  === idParametro );

    if(detalhes){
      this.DetalheSubject.next(detalhes);
      console.log(this.dado$);
    }else{
      console.log("Erro --> O método find esta retornando 'undefield'");
    }
  }
  )
}
}
