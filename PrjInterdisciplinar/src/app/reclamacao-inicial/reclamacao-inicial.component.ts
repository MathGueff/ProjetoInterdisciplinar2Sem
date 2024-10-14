import { Component } from '@angular/core';
import { Reclamacao } from '../models/reclamacao';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reclamacao-inicial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reclamacao-inicial.component.html',
  styleUrl: './reclamacao-inicial.component.css'
})
export class ReclamacaoInicialComponent {
  objReclamacao: Reclamacao [] = [
    {
      idReclamacao:1,
      tituloReclamao: "Descaso e Ineficiência no Serviço de Saneamento.",
      descricaoReclamacao: "Estou insatisfeito com o serviço da Companhia de Saneamento Municipal. Há falta de          manutenção preventiva, com vazamentos constantes na minha rua que não são resolvidos, colocando em risco a saúde pública. O atendimento ao cliente é ineficiente, com dificuldade de contato e falta de soluções. Além disso, tenho recebido faturas com valores altos e pouca transparência. Espero que a empresa melhore a manutenção, o atendimento e ofereça clareza nas cobranças",
      dataReclamacao:"14/10/2024",
      imagem:"reclamacao1.jpg"
    },
    {
      idReclamacao:2,
      tituloReclamao: "Vazamento de Água Persistente na Rua",
      descricaoReclamacao: "Estou enfrentando problemas frequentes de vazamento de água na minha rua. Já fiz diversas notificações à Companhia de Saneamento, mas o problema persiste. Isso está afetando o abastecimento e a qualidade da água. Solicito que sejam tomadas medidas urgentes para a manutenção adequada das redes.",
      dataReclamacao:"15/09/2024",
      imagem:"vazamento.jpg"
    },
    {
      idReclamacao:3,
      tituloReclamao: "Cobrança Indevida e Valor Exorbitante",
      descricaoReclamacao: "Recebi uma fatura com valor muito acima do esperado, sem qualquer explicação sobre o motivo desse aumento. A falta de transparência na cobrança dificulta a compreensão dos valores. Solicito uma revisão imediata da fatura e uma explicação detalhada sobre os encargos.",
      dataReclamacao:"20/04/2024",
      imagem:"conta-de-agua.jpg"
      },
  ]
}
