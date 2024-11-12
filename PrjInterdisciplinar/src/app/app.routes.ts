import { MenuUsuarioComponent } from './Usuario/menu-usuario/menu-usuario.component';
import { Routes } from '@angular/router';
import { ReclamacaoDescricaoComponent } from './Reclamacao/reclamacao-descricao/reclamacao-descricao.component';
import { DoencaDetalhesComponent } from './Doenca/doenca-detalhes/doenca-detalhes.component';
import { DoencasInicialComponent } from './Doenca/doencas-inicial/doencas-inicial.component';
import { SobrenosComponent } from './Layout/sobrenos/sobrenos.component';
import { MenuAdminComponent } from './Admin/menu-admin/menu-admin.component';
import { FormLoginComponent } from './Login/form-login/form-login.component';
import { FormCadastroComponent } from './Login/form-cadastro/form-cadastro.component';

export const routes: Routes = [
  {path:'pagina-inicial', component:MenuUsuarioComponent},
  {path: 'pagina-admin', component:MenuAdminComponent},
  {path: 'doenca-inicial',component:DoencasInicialComponent},
  {path: 'doenca-detalhada', component:DoencaDetalhesComponent},
  {path: 'reclamacao-descricao',component:ReclamacaoDescricaoComponent},
  {path: 'sobre-nos', component:SobrenosComponent},
  {path: 'login', component:FormLoginComponent},
  {path: 'cadastro', component:FormCadastroComponent},
];
