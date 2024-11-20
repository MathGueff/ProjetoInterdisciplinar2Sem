import { MenuUsuarioComponent } from './Usuario/menu-usuario/menu-usuario.component';
import { Routes } from '@angular/router';
import { ReclamacaoDescricaoComponent } from './Reclamacao/reclamacao-descricao/reclamacao-descricao.component';
import { DoencaDetalhesComponent } from './Doenca/doenca-detalhes/doenca-detalhes.component';
import { DoencasInicialComponent } from './Doenca/doencas-inicial/doencas-inicial.component';
import { ReclamacaoInicialComponent } from './Reclamacao/reclamacao-inicial/reclamacao-inicial.component';
import { SobrenosComponent } from './Layout/sobrenos/sobrenos.component';
import { MenuAdminComponent } from './Admin/menu-admin/menu-admin.component';
import { NoticiasInicialComponent } from './Noticias/noticias-inicial/noticias-inicial.component';
import { FormLoginComponent } from './Login/form-login/form-login.component';
import { FormCadastroComponent } from './Login/form-cadastro/form-cadastro.component';
import { ComentarioCentralComponent } from './Comentario/comentario-central/comentario-central.component';
import { ReclamacaoFormComponent } from './Reclamacao/reclamacao-form/reclamacao-form.component';


export const routes: Routes = [
  {path:'', component:MenuUsuarioComponent},
  {path: 'pagina-admin', component:MenuAdminComponent},
  {path: 'doenca-inicial',component:DoencasInicialComponent},
  {path:'reclamacao-inicial', component:ReclamacaoInicialComponent},
  {path: 'doenca-detalhada', component:DoencaDetalhesComponent},
  {path: 'reclamacao-descricao/:id',component:ReclamacaoDescricaoComponent},
  {path: 'sobre-nos', component:SobrenosComponent},
  {path: 'reclamacao-descricao',component:ReclamacaoDescricaoComponent},
  {path: 'noticia-inicial', component:NoticiasInicialComponent},
  {path: 'login', component:FormLoginComponent},
  {path: 'cadastro', component:FormCadastroComponent},
  {path: 'comentario',component:ComentarioCentralComponent},
  {path: 'reclamacao-form', component: ReclamacaoFormComponent},

];
