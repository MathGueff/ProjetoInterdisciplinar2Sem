import { Component } from '@angular/core';
import { MenuUsuarioComponent } from '../menu-usuario/menu-usuario.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MenuUsuarioComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  title:string = "titulo";
}
