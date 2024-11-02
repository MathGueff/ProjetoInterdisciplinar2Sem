import { MenuUsuarioComponent } from './paginasEstaticas/menu-usuario/menu-usuario.component';
import { Routes } from '@angular/router';
import { ReclamacaoDescricaoComponent } from './Reclamacao/reclamacao-descricao/reclamacao-descricao.component';

export const routes: Routes = [
  {path:'pagina-inicial', component:MenuUsuarioComponent},
  {path: 'reclamacao-descricao',component:ReclamacaoDescricaoComponent}
];
