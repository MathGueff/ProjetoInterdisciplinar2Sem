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
export class MenuUsuarioComponent{

  //Array com os links do menu
  cards : MenuUsuario[] = [
    {nome : 'Doenças', titulo : 'Doenças relacionadas', src : 'assets/icones/icon_black_doenca.svg', info : 'Veja informações sobre as doenças que estão relacionadas a falta de saneamento básico'},
    {nome : 'Notícias', titulo : 'Notícias sobre saneamento básico', src : 'assets/icones/icon_black_noticia.svg', info : 'Confira algumas das principais notícias sobre saneamento básico e a distribuição de água potável.'},
    {nome : 'Reclamações', titulo : 'Faça uma reclamação', src : 'assets/icones/icon_black_reclamacao.svg', info : 'Clique aqui para registrar sua reclamação e ajudar a melhorar a qualidade do abastecimento de água, coleta de esgoto e outros serviços essenciais em sua comunidade!'},
    {nome : 'Responsáveis', titulo : 'Responsáveis pelo saneamento básico', src : 'assets/icones/icon_black_responsavel.svg', info : 'Identifique os principais responsáveis pelo saneamento básico e descubra como você pode contribuir para melhorar o saneamento em sua cidade.'}
  ];
}
