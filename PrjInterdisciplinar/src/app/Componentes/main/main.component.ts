import { Component } from '@angular/core';
import { MenuUsuarioComponent } from '../../paginasEstaticas/menu-usuario/menu-usuario.component';
import { PagDoecaComponent } from '../../doencas/pag-doeca/pag-doeca.component';
import { PagNoticiaComponent } from '../../Noticia/pag-noticia/pag-noticia.component';
import { PagReclamacaoComponent } from '../../Reclamacao/pag-reclamacao/pag-reclamacao.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MenuUsuarioComponent, PagDoecaComponent,PagNoticiaComponent,PagReclamacaoComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  title:string = "titulo";
}
