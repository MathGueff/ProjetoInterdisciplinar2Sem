import { Component } from '@angular/core';
import { MenuAdmin } from '../../models/menu-admin';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-admin',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu-admin.component.html',
  styleUrl: './menu-admin.component.css'
})
export class MenuAdminComponent {
  links : MenuAdmin[] = [
    {path: '/reclamacao-descricao', nome : 'Gerenciar Reclamações',  img : 'assets/icones/icon_white_reclamacao.svg'},
    {path: '/doenca-detalhada', nome : 'Gerenciar notícias do site', img : 'assets/icones/icon_white_noticia.svg'},
    {path: '/doenca-inicial', nome : 'Gerenciar doenças do site', img : 'assets/icones/icon_white_doenca.svg'},
    {path: '/pagina-inicial', nome : 'Ver página sobre o responsável', img : 'assets/icones/icon_white_responsavel.svg'}
  ]
}
