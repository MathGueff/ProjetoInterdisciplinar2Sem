import { Component, OnInit } from '@angular/core';
import { ComentarioBaixoComponent } from '../comentario-baixo/comentario-baixo.component';
import { ComentarioCimaComponent } from '../comentario-cima/comentario-cima.component';
import { CommonModule } from '@angular/common';
import { ComentarioInputComponent } from '../comentario-input/comentario-input.component';
import { Comentario } from '../../models/comentario';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Reclamacao } from '../../models/reclamacao';

@Component({
  selector: 'app-comentario-central',
  standalone: true,
  imports: [
    CommonModule,
    ComentarioCimaComponent,
    ComentarioBaixoComponent,
    ComentarioInputComponent,
    RouterModule,
  ],
  templateUrl: './comentario-central.component.html',
  styleUrl: './comentario-central.component.css',
})
export class ComentarioCentralComponent implements OnInit {
  //Observable Comentário
  private comentarioSubject: BehaviorSubject<Comentario[]> =
    new BehaviorSubject([] as any);
  data$: Observable<Comentario[]> = this.comentarioSubject.asObservable();

  comentarios: Comentario[] = [
    {
      id: 1,
      descricaoComentario:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu nulla pellentesque, dictum quam ut, egestas velit. Sed eget eleifend nulla. Praesent scelerisque risus neque, vel euismod magna dictum quis. In et fermentum ex. Vivamus id sollicitudin velit. Sed ut sodales turpis. Donec vestibulum urna sit amet sem porta porttitor. Praesent faucibus elit tellus, sit amet rhoncus turpis eleifend consequat. Aliquam ac ante scelerisque, ornare risus eget, pellentesque neque. Sed eget pulvinar augue, eget molestie tortor. In hac habitasse platea dictumst. Maecenas interdum massa non lacinia mollis. Curabitur nulla ante, tempor nec odio ut, dapibus sollicitudin odio. Vestibulum non justo id erat pharetra placerat et in mauris. Sed pharetra vitae risus ac mollis.',
      dataComentario: '21/11/2024 às 16:30',
      objAdmin: 'Matheus',
      objReclamacao: {
        idReclamacao: 1,
        tituloReclamao: 'Sei sei lá lá',
        descricaoReclamacao:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis nec dui venenatis tempor. Nullam vitae sodales neque, at sodales lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Mauris dictum fringilla efficitur. Aliquam sit amet mi nunc. Nullam vel viverra turpis. Sed nec condimentum urna. Phasellus eu consectetur purus. Suspendisse non fringilla nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        dataReclamacao: '22/10/2004',
        objImagem: 'img/paginas/reclamacoes/user1.jpg',
        objTag: 'Tag1',
      },
    },
    {
      id: 2,
      descricaoComentario:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu nulla pellentesque, dictum quam ut, egestas velit. Sed eget eleifend nulla. Praesent scelerisque risus neque, vel euismod magna dictum quis. In et fermentum ex. Vivamus id sollicitudin velit. Sed ut sodales turpis. Donec vestibulum urna sit amet sem porta porttitor. Praesent faucibus elit tellus, sit amet rhoncus turpis eleifend consequat. Aliquam ac ante scelerisque, ornare risus eget, pellentesque neque. Sed eget pulvinar augue, eget molestie tortor. In hac habitasse platea dictumst. Maecenas interdum massa non lacinia mollis. Curabitur nulla ante, tempor nec odio ut, dapibus sollicitudin odio. Vestibulum non justo id erat pharetra placerat et in mauris. Sed pharetra vitae risus ac mollis.',
      dataComentario: '21/11/2024 às 16:30',
      objAdmin: null,
      objReclamacao: {
        idReclamacao: 1,
        tituloReclamao: 'Sei sei lá lá',
        descricaoReclamacao:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis nec dui venenatis tempor. Nullam vitae sodales neque, at sodales lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Mauris dictum fringilla efficitur. Aliquam sit amet mi nunc. Nullam vel viverra turpis. Sed nec condimentum urna. Phasellus eu consectetur purus. Suspendisse non fringilla nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        dataReclamacao: '22/10/2004',
        objImagem: 'img/paginas/reclamacoes/user1.jpg',
        objTag: 'Tag1',
      },
    },
    {
      id: 3,
      descricaoComentario:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu nulla pellentesque, dictum quam ut, egestas velit. Sed eget eleifend nulla. Praesent scelerisque risus neque, vel euismod magna dictum quis. In et fermentum ex. Vivamus id sollicitudin velit. Sed ut sodales turpis. Donec vestibulum urna sit amet sem porta porttitor. Praesent faucibus elit tellus, sit amet rhoncus turpis eleifend consequat. Aliquam ac ante scelerisque, ornare risus eget, pellentesque neque. Sed eget pulvinar augue, eget molestie tortor. In hac habitasse platea dictumst. Maecenas interdum massa non lacinia mollis. Curabitur nulla ante, tempor nec odio ut, dapibus sollicitudin odio. Vestibulum non justo id erat pharetra placerat et in mauris. Sed pharetra vitae risus ac mollis.',
      dataComentario: '21/11/2024 às 16:30',
      objAdmin: null,
      objReclamacao: {
        idReclamacao: 1,
        tituloReclamao: 'Sei sei lá lá',
        descricaoReclamacao:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis nec dui venenatis tempor. Nullam vitae sodales neque, at sodales lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Mauris dictum fringilla efficitur. Aliquam sit amet mi nunc. Nullam vel viverra turpis. Sed nec condimentum urna. Phasellus eu consectetur purus. Suspendisse non fringilla nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        dataReclamacao: '22/10/2004',
        objImagem: 'img/paginas/reclamacoes/user1.jpg',
        objTag: 'Tag1',
      },
    },
    {
      id: 4,
      descricaoComentario:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu nulla pellentesque, dictum quam ut, egestas velit. Sed eget eleifend nulla. Praesent scelerisque risus neque, vel euismod magna dictum quis. In et fermentum ex. Vivamus id sollicitudin velit. Sed ut sodales turpis. Donec vestibulum urna sit amet sem porta porttitor. Praesent faucibus elit tellus, sit amet rhoncus turpis eleifend consequat. Aliquam ac ante scelerisque, ornare risus eget, pellentesque neque. Sed eget pulvinar augue, eget molestie tortor. In hac habitasse platea dictumst. Maecenas interdum massa non lacinia mollis. Curabitur nulla ante, tempor nec odio ut, dapibus sollicitudin odio. Vestibulum non justo id erat pharetra placerat et in mauris. Sed pharetra vitae risus ac mollis.',
      dataComentario: '21/11/2024 às 16:30',
      objAdmin: 'Matheus',
      objReclamacao: {
        idReclamacao: 1,
        tituloReclamao: 'Sei sei lá lá',
        descricaoReclamacao:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis nec dui venenatis tempor. Nullam vitae sodales neque, at sodales lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Mauris dictum fringilla efficitur. Aliquam sit amet mi nunc. Nullam vel viverra turpis. Sed nec condimentum urna. Phasellus eu consectetur purus. Suspendisse non fringilla nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        dataReclamacao: '22/10/2004',
        objImagem: 'img/paginas/reclamacoes/user1.jpg',
        objTag: 'Tag1',
      },
    },
    {
      id: 5,
      descricaoComentario:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu nulla pellentesque, dictum quam ut, egestas velit. Sed eget eleifend nulla. Praesent scelerisque risus neque, vel euismod magna dictum quis. In et fermentum ex. Vivamus id sollicitudin velit. Sed ut sodales turpis. Donec vestibulum urna sit amet sem porta porttitor. Praesent faucibus elit tellus, sit amet rhoncus turpis eleifend consequat. Aliquam ac ante scelerisque, ornare risus eget, pellentesque neque. Sed eget pulvinar augue, eget molestie tortor. In hac habitasse platea dictumst. Maecenas interdum massa non lacinia mollis. Curabitur nulla ante, tempor nec odio ut, dapibus sollicitudin odio. Vestibulum non justo id erat pharetra placerat et in mauris. Sed pharetra vitae risus ac mollis.',
      dataComentario: '21/11/2024 às 16:30',
      objAdmin: 'Adryan',
      objReclamacao: {
        idReclamacao: 2,
        tituloReclamao: 'Sei sei lá lá2',
        descricaoReclamacao:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis nec dui venenatis tempor. Nullam vitae sodales neque, at sodales lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Mauris dictum fringilla efficitur. Aliquam sit amet mi nunc. Nullam vel viverra turpis. Sed nec condimentum urna. Phasellus eu consectetur purus. Suspendisse non fringilla nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        dataReclamacao: '22/10/2024',
        objImagem: 'img/paginas/reclamacoes/user2.jpg',
        objTag: 'Tag2',
      },
    },
    {
      id: 6,
      descricaoComentario:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu nulla pellentesque, dictum quam ut, egestas velit. Sed eget eleifend nulla. Praesent scelerisque risus neque, vel euismod magna dictum quis. In et fermentum ex. Vivamus id sollicitudin velit. Sed ut sodales turpis. Donec vestibulum urna sit amet sem porta porttitor. Praesent faucibus elit tellus, sit amet rhoncus turpis eleifend consequat. Aliquam ac ante scelerisque, ornare risus eget, pellentesque neque. Sed eget pulvinar augue, eget molestie tortor. In hac habitasse platea dictumst. Maecenas interdum massa non lacinia mollis. Curabitur nulla ante, tempor nec odio ut, dapibus sollicitudin odio. Vestibulum non justo id erat pharetra placerat et in mauris. Sed pharetra vitae risus ac mollis.',
      dataComentario: '21/11/2024 às 16:30',
      objAdmin: null,
      objReclamacao: {
        idReclamacao: 2,
        tituloReclamao: 'Sei sei lá lá2',
        descricaoReclamacao:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis nec dui venenatis tempor. Nullam vitae sodales neque, at sodales lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Mauris dictum fringilla efficitur. Aliquam sit amet mi nunc. Nullam vel viverra turpis. Sed nec condimentum urna. Phasellus eu consectetur purus. Suspendisse non fringilla nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        dataReclamacao: '22/10/2024',
        objImagem: 'img/paginas/reclamacoes/user2.jpg',
        objTag: 'Tag2',
      },
    },
    {
      id: 7,
      descricaoComentario:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu nulla pellentesque, dictum quam ut, egestas velit. Sed eget eleifend nulla. Praesent scelerisque risus neque, vel euismod magna dictum quis. In et fermentum ex. Vivamus id sollicitudin velit. Sed ut sodales turpis. Donec vestibulum urna sit amet sem porta porttitor. Praesent faucibus elit tellus, sit amet rhoncus turpis eleifend consequat. Aliquam ac ante scelerisque, ornare risus eget, pellentesque neque. Sed eget pulvinar augue, eget molestie tortor. In hac habitasse platea dictumst. Maecenas interdum massa non lacinia mollis. Curabitur nulla ante, tempor nec odio ut, dapibus sollicitudin odio. Vestibulum non justo id erat pharetra placerat et in mauris. Sed pharetra vitae risus ac mollis.',
      dataComentario: '21/11/2024 às 16:30',
      objAdmin: 'Davy',
      objReclamacao: {
        idReclamacao: 3,
        tituloReclamao: 'Sei sei lá lá 3',
        descricaoReclamacao:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis nec dui venenatis tempor. Nullam vitae sodales neque, at sodales lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Mauris dictum fringilla efficitur. Aliquam sit amet mi nunc. Nullam vel viverra turpis. Sed nec condimentum urna. Phasellus eu consectetur purus. Suspendisse non fringilla nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        dataReclamacao: '10/10/2014',
        objImagem: 'img/paginas/reclamacoes/user3.jpg',
        objTag: 'Tag3',
      },
    },
    {
      id: 8,
      descricaoComentario:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu nulla pellentesque, dictum quam ut, egestas velit. Sed eget eleifend nulla. Praesent scelerisque risus neque, vel euismod magna dictum quis. In et fermentum ex. Vivamus id sollicitudin velit. Sed ut sodales turpis. Donec vestibulum urna sit amet sem porta porttitor. Praesent faucibus elit tellus, sit amet rhoncus turpis eleifend consequat. Aliquam ac ante scelerisque, ornare risus eget, pellentesque neque. Sed eget pulvinar augue, eget molestie tortor. In hac habitasse platea dictumst. Maecenas interdum massa non lacinia mollis. Curabitur nulla ante, tempor nec odio ut, dapibus sollicitudin odio. Vestibulum non justo id erat pharetra placerat et in mauris. Sed pharetra vitae risus ac mollis.',
      dataComentario: '21/11/2024 às 16:30',
      objAdmin: 'Davy',
      objReclamacao: {
        idReclamacao: 3,
        tituloReclamao: 'Sei sei lá lá 3',
        descricaoReclamacao:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis nec dui venenatis tempor. Nullam vitae sodales neque, at sodales lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Mauris dictum fringilla efficitur. Aliquam sit amet mi nunc. Nullam vel viverra turpis. Sed nec condimentum urna. Phasellus eu consectetur purus. Suspendisse non fringilla nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        dataReclamacao: '10/10/2014',
        objImagem: 'img/paginas/reclamacoes/user3.jpg',
        objTag: 'Tag3',
      },
    },
  ];
  //Objeto Reclamação para colocar no título, data e descrição
  constructor(private activeroute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activeroute.params.subscribe((params) => {
      // pega o valor do parametro da URL
      const IdParametro = Number(params['idReclamamacao']);

      //Filtra todos os comentários de acordo com o ID da objReclamação e retorna uma Array
      const comentario = this.comentarios.filter(
        (comentario) => comentario.objReclamacao.idReclamacao === IdParametro
      );

      //Verifica se o Array é vazio
      if (comentario.length > 0) {
        //atualiza o observable
        this.comentarioSubject.next(comentario);
      }
      console.log(comentario);
    });
  }
}
