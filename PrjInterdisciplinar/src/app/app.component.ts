import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ReclacacaoPainelComponent } from './reclacacao-painel/reclacacao-painel.component';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { FooterComponent } from './footer/footer.component';
import { DoencasComponent } from "./doencas/doencas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MenuUsuarioComponent, ReclacacaoPainelComponent, MenuAdminComponent, FooterComponent, DoencasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PrjInterdisciplinar';
}
