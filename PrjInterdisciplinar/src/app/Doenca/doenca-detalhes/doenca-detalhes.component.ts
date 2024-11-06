import { CommonModule } from '@angular/common';
import { Sintomas } from '../../models/sintomas';
import { Component } from '@angular/core';

@Component({
  selector: 'app-doenca-detalhes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doenca-detalhes.component.html',
  styleUrl: './doenca-detalhes.component.css'
})
export class DoencaDetalhesComponent {
  sintomas:Sintomas[]=[
    {
      id:1,
      nome:'Tonturas;'
    },
    {
      id:2,
      nome:'Sensação de plenitude gástrica;'
    },
    {
      id:3,
      nome:'Prurido (coceira) anal;'
    },
    {
      id:4,
      nome:'Palpitações;'
    },
    {
      id:5,
      nome:'Impotência;'
    },
    {
      id:6,
      nome:'Emagrecimento;'
    },
    {
      id:7,
      nome:'Endurecimento e aumento do fígado.'
    },


  ]
}
