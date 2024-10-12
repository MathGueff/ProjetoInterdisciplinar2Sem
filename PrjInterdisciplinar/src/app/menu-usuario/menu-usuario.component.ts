import { Component } from '@angular/core';
import { MenuUsuario } from '../models/menu-usuario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-usuario.component.html',
  styleUrl: './menu-usuario.component.css'
})
export class MenuUsuarioComponent {
  cards : MenuUsuario[] = [
    {nome : 'Doenças', titulo : 'Página de Doenças', src : 'assets/icones/icon_black_doenca.svg', info : 'Veja informações sobre as doenças que estão relacionadas a falta de saneamento básico'},
    {nome : 'Notícias', titulo : 'Página de Notícias', src : 'assets/icones/icon_black_noticia.svg', info : 'Confira algumas das principais notícias sobre saneamento básico e a distribuição de água potável.'},
    {nome : 'Reclamações', titulo : 'Página de Reclamações', src : 'assets/icones/icon_black_reclamacao.svg', info : 'Clique aqui para registrar sua reclamação e ajudar a melhorar a qualidade do abastecimento de água, coleta de esgoto e outros serviços essenciais em sua comunidade!'},
    {nome : 'Responsáveis', titulo : 'Página de Responsáveis', src : 'assets/icones/icon_black_responsavel.svg', info : 'Identifique os principais responsáveis pelo saneamento básico e descubra como você pode contribuir para melhorar o saneamento em sua cidade.'}
  ]
}
