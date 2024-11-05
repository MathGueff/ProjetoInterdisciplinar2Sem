import { PagNoticiaComponent } from './Noticia/pag-noticia/pag-noticia.component';
import { Routes } from '@angular/router';
import { PagReclamacaoComponent } from './Reclamacao/pag-reclamacao/pag-reclamacao.component';
import { PagDoecaComponent } from './doencas/pag-doeca/pag-doeca.component';
export const routes: Routes = [
  //{path:"sobre-nos",component:SobrenosComponent},
  {path:"reclamacoes",component:PagReclamacaoComponent},
  {path:"doencas",component:PagDoecaComponent},
  {path:"noticias",component:PagNoticiaComponent}
];
