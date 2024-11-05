import { Component } from '@angular/core';
import { ReclamacaoDescricaoComponent } from '../reclamacao-descricao/reclamacao-descricao.component';

@Component({
  selector: 'app-pag-reclamacao',
  standalone: true,
  imports: [ReclamacaoDescricaoComponent],
  templateUrl: './pag-reclamacao.component.html',
  styleUrl: './pag-reclamacao.component.css'
})
export class PagReclamacaoComponent {

}
