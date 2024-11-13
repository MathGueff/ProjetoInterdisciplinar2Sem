import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarLink } from '../../../models/navbar-link';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginLinkComponent } from "../login-link/login-link.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, LoginLinkComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  //Array com links de navegação da navbar
  links : NavbarLink[] =[
    {path: '/doenca-inicial', img: 'assets/icones/icon_white_doenca.svg', alt : 'Ícone do link para página de Doenças', nome : 'Doenças'},
    {path: '/doenca-detalhada', img: 'assets/icones/icon_white_noticia.svg', alt : 'Ícone do link para página de Notícias', nome : 'Notícias'},
    {path: '/reclamacao-descricao', img: 'assets/icones/icon_white_reclamacao.svg', alt : 'Ícone do link para página de Reclamação', nome : 'Reclamação'},
    {path: '/pagina-admin', img: 'assets/icones/icon_white_responsavel.svg', alt : 'Ícone do link para página de Reclamação', nome : 'Admin'}

  ]
}