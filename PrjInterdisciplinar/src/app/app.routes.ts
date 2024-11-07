import { MenuUsuarioComponent } from './Layout/menu-usuario/menu-usuario.component';
import { Routes } from '@angular/router';
import { ReclamacaoDescricaoComponent } from './Reclamacao/reclamacao-descricao/reclamacao-descricao.component';
import { DoencaDetalhesComponent } from './Doenca/doenca-detalhes/doenca-detalhes.component';
import { DoencasInicialComponent } from './Doenca/doencas-inicial/doencas-inicial.component';
import { MenuAdminComponent } from './Layout/menu-admin/menu-admin.component';
import { ReclamacaoInicialComponent } from './Reclamacao/reclamacao-inicial/reclamacao-inicial.component';

export const routes: Routes = [
  {path:'pagina-inicial', component:MenuUsuarioComponent},
  {path: 'pagina-admin', component:MenuAdminComponent},
  {path: 'doenca-inicial',component:DoencasInicialComponent},
  {path:'pagina-inicial', component:MenuUsuarioComponent},
  {path: 'reclamacao-descricao',component:ReclamacaoDescricaoComponent},
  {path:'reclamacao-inicial', component:ReclamacaoInicialComponent}
];
