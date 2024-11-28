import { Component } from '@angular/core';
import { DetalheNoticia } from '../../models/detalhe';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noticias-detalhes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './noticias-detalhes.component.html',
  styleUrl: './noticias-detalhes.component.css'
})
export class NoticiasDetalhesComponent {
  Detalhes: DetalheNoticia[] = [
    {
      id: 1,
      title: 'Despejo de esgoto sem tratamento no Rio Sorocaba afeta processo de despoluição, alertam especialistas.',
      abstract:'O lançamento de esgoto sem tratamento compromete o trabalho de décadas dedicado à despoluição no Rio Sorocaba. A opinião é de especialistas ouvidos pelo G1, que expõe os problemas e também apresentam possíveis soluções para reverter o cenário. Um relatório da Companhia Ambiental do Estado de São Paulo (Cetesb), divulgado em 2024, com referência a dados coleatados em 2023, aponta que qualidade da água é boa em Votorantim, mas fica apenas regular quando chega em Sorocaba (SP).',
      source:'https://g1.globo.com/sp/sorocaba-jundiai/noticia/2024/04/29/despejo-de-esgoto-sem-tratamento-no-rio-sorocaba-afeta-processo-de-despoluicao-alertam-especialistas.ghtml',
      imgNoticia:'img/paginas/responsaveis/trash.jpg'
    },
    {
      id: 2,
      title: 'Despejo de esgoto sem tratamento no Rio Sorocaba afeta processo de despoluição, alertam especialistas.',
      abstract:'O lançamento de esgoto sem tratamento compromete o trabalho de décadas dedicado à despoluição no Rio Sorocaba. A opinião é de especialistas ouvidos pelo G1, que expõe os problemas e também apresentam possíveis soluções para reverter o cenário. Um relatório da Companhia Ambiental do Estado de São Paulo (Cetesb), divulgado em 2024, com referência a dados coleatados em 2023, aponta que qualidade da água é boa em Votorantim, mas fica apenas regular quando chega em Sorocaba (SP).',
      source:'https://g1.globo.com/sp/sorocaba-jundiai/noticia/2024/04/29/despejo-de-esgoto-sem-tratamento-no-rio-sorocaba-afeta-processo-de-despoluicao-alertam-especialistas.ghtml',
      imgNoticia:'img/paginas/responsaveis/trash.jpg'
    },
    {
      id: 3,
      title: 'Despejo de esgoto sem tratamento no Rio Sorocaba afeta processo de despoluição, alertam especialistas.',
      abstract:'O lançamento de esgoto sem tratamento compromete o trabalho de décadas dedicado à despoluição no Rio Sorocaba. A opinião é de especialistas ouvidos pelo G1, que expõe os problemas e também apresentam possíveis soluções para reverter o cenário. Um relatório da Companhia Ambiental do Estado de São Paulo (Cetesb), divulgado em 2024, com referência a dados coleatados em 2023, aponta que qualidade da água é boa em Votorantim, mas fica apenas regular quando chega em Sorocaba (SP).',
      source:'https://g1.globo.com/sp/sorocaba-jundiai/noticia/2024/04/29/despejo-de-esgoto-sem-tratamento-no-rio-sorocaba-afeta-processo-de-despoluicao-alertam-especialistas.ghtml',
      imgNoticia:'img/paginas/responsaveis/trash.jpg'
    },
    {
      id: 4,
      title: 'Despejo de esgoto sem tratamento no Rio Sorocaba afeta processo de despoluição, alertam especialistas.',
      abstract:'O lançamento de esgoto sem tratamento compromete o trabalho de décadas dedicado à despoluição no Rio Sorocaba. A opinião é de especialistas ouvidos pelo G1, que expõe os problemas e também apresentam possíveis soluções para reverter o cenário. Um relatório da Companhia Ambiental do Estado de São Paulo (Cetesb), divulgado em 2024, com referência a dados coleatados em 2023, aponta que qualidade da água é boa em Votorantim, mas fica apenas regular quando chega em Sorocaba (SP).',
      source:'https://g1.globo.com/sp/sorocaba-jundiai/noticia/2024/04/29/despejo-de-esgoto-sem-tratamento-no-rio-sorocaba-afeta-processo-de-despoluicao-alertam-especialistas.ghtml',
      imgNoticia:'img/paginas/responsaveis/trash.jpg'
    },
  ]
  private DetalheSubject = new BehaviorSubject<DetalheNoticia | undefined>(undefined);
  dado$: Observable<DetalheNoticia | undefined> = this.DetalheSubject.asObservable();
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
