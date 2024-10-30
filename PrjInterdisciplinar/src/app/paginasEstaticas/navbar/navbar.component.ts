import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarLink } from '../../models/navbar-link';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  links : NavbarLink[] =[
    {path: '', img: 'assets/icones/icon_white_doenca.svg', alt : 'Ícone do link para página de Doenças', nome : 'Doenças'},
    {path: '', img: 'assets/icones/icon_white_noticia.svg', alt : 'Ícone do link para página de Notícias', nome : 'Notícias'},
    {path: '', img: 'assets/icones/icon_white_reclamacao.svg', alt : 'Ícone do link para página de Reclamação', nome : 'Reclamação'}
  ]
}
