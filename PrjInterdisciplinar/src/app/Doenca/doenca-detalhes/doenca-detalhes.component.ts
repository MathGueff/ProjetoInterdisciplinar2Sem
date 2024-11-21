import { CommonModule } from '@angular/common';
import { Detalhe } from '../../models/detalhe';
import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivatedRoute, RouterModule } from '@angular/router';


@Component({
  selector: 'app-doenca-detalhes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './doenca-detalhes.component.html',
  styleUrl: './doenca-detalhes.component.css'
})
export class DoencaDetalhesComponent {
  Detalhes: Detalhe[] = [
    {
      id: 1,
      title: 'Amebíase',
      transmission: 'a amebíase é transmitida pela contaminação fecal da água de consumo humano e alimentos com cistos da ameba, os quais são relativamente resistente à cloração. Também é transmitida pelo contato direto de mãos contaminadas ou objetos sujos, bem como, sexualmente pelo contato oral-anal.',
      treatment: 'Metronidazol, tinidazol, secnidazol ou ornidazol e nitazoxanida não matam todos os cistos que estão no intestino grosso. Um segundo medicamento (como paromomicina, diiodohidroxiquina ou furoato de diloxanida) é usado para matar esses cistos e, assim, prevenir uma recaída.',
      imgDoenca: 'img/paginas/doencas/amebiase.jpg',
      symotomsName: ['Dor ou cólica abdominal', 'Febre', 'Diarreia, podendo ser forte e com sangue ou muco', 'Perda de peso', 'Náuseas e vômitos', 'Gases', 'Fadiga', 'Abdômen sensível ao toque'],
      source:'https://www.msdmanuals.com/pt/casa/infec%C3%A7%C3%B5es/infec%C3%A7%C3%B5es-parasit%C3%A1rias-protozo%C3%A1rios-intestinais-e-microspor%C3%ADdios/ameb%C3%ADase',
    },
    {
      id: 2,
      title: 'Cólera',
      transmission: 'a amebíase é transmitida pela contaminação fecal da água de consumo humano e alimentos com cistos da ameba, os quais são relativamente resistente à cloração. Também é transmitida pelo contato direto de mãos contaminadas ou objetos sujos, bem como, sexualmente pelo contato oral-anal.',
      treatment: 'Metronidazol, tinidazol, secnidazol ou ornidazol e nitazoxanida não matam todos os cistos que estão no intestino grosso. Um segundo medicamento (como paromomicina, diiodohidroxiquina ou furoato de diloxanida) é usado para matar esses cistos e, assim, prevenir uma recaída.',
      imgDoenca: 'img/paginas/doencas/colera.webp',
      symotomsName: ['Dor ou cólica abdominal', 'Febre', 'Diarreia, podendo ser forte e com sangue ou muco', 'Perda de peso', 'Náuseas e vômitos', 'Gases', 'Fadiga', 'Abdômen sensível ao toque'],
      source:'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/e/esquistossomose'
    },
    {
      id: 3,
      title: 'Esquistossomose',
      transmission: 'É uma doença parasitária, diretamente relacionada ao saneamento precário, causada pelo Schistosoma mansoni. A pessoa adquire a infecção quando entra em contato com água doce onde existam caramujos infectados pelos vermes causadores da esquistossomose. No Brasil, a esquistossomose é conhecida popularmente como “xistose”, “barriga d’água” ou “doença dos caramujos”.',
      treatment: 'O diagnóstico da esquistossomose é feito por meio de exames laboratoriais de fezes. É possível detectar, por meio desses exames, os ovos do parasita causador da doença. O médico também pode solicitar teste de anticorpos para verificar sinais de infecção e para formas graves ultrassonografia. O tratamento da esquistossomose, para os casos simples, é em dose única e supervisionado feito por meio do medicamento Praziquantel, receitado pelo médico e distribuído gratuitamente pelo Ministério da Saúde. Os casos graves geralmente requerem internação hospitalar e até mesmo tratamento cirúrgico, conforme cada situação',
      symotomsName: ['Febre', 'Dor de cabeça', 'Calafrios', 'Suores', 'Fraqueza', 'Falta de apetite', 'Dor muscular', 'Tosse', 'Diarreia', 'Diarreia mais constante, alternando-se com prisão de ventre', 'Tonturas', 'Sensação de plenitude gástrica', 'Prurido (coceira) anal'],
      imgDoenca: 'img/paginas/doencas/esquistossomose.jpg',
      source:'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/e/esquistossomose',
    },
    {
      id: 4,
      title: 'Esquistossomose',
      transmission: 'É uma doença parasitária, diretamente relacionada ao saneamento precário, causada pelo Schistosoma mansoni. A pessoa adquire a infecção quando entra em contato com água doce onde existam caramujos infectados pelos vermes causadores da esquistossomose. No Brasil, a esquistossomose é conhecida popularmente como “xistose”, “barriga d’água” ou “doença dos caramujos”.',
      treatment: 'O diagnóstico da esquistossomose é feito por meio de exames laboratoriais de fezes. É possível detectar, por meio desses exames, os ovos do parasita causador da doença. O médico também pode solicitar teste de anticorpos para verificar sinais de infecção e para formas graves ultrassonografia. O tratamento da esquistossomose, para os casos simples, é em dose única e supervisionado feito por meio do medicamento Praziquantel, receitado pelo médico e distribuído gratuitamente pelo Ministério da Saúde. Os casos graves geralmente requerem internação hospitalar e até mesmo tratamento cirúrgico, conforme cada situação',
      symotomsName: ['Febre', 'Dor de cabeça', 'Calafrios', 'Suores', 'Fraqueza', 'Falta de apetite', 'Dor muscular', 'Tosse', 'Diarreia', 'Diarreia mais constante, alternando-se com prisão de ventre', 'Tonturas', 'Sensação de plenitude gástrica', 'Prurido (coceira) anal'],
      imgDoenca: 'img/paginas/doencas/leptospirose.webp',
      source:'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/e/esquistossomose',
    },
    {
      id: 5,
      title: 'Esquistossomose',
      transmission: 'É uma doença parasitária, diretamente relacionada ao saneamento precário, causada pelo Schistosoma mansoni. A pessoa adquire a infecção quando entra em contato com água doce onde existam caramujos infectados pelos vermes causadores da esquistossomose. No Brasil, a esquistossomose é conhecida popularmente como “xistose”, “barriga d’água” ou “doença dos caramujos”.',
      treatment: 'O diagnóstico da esquistossomose é feito por meio de exames laboratoriais de fezes. É possível detectar, por meio desses exames, os ovos do parasita causador da doença. O médico também pode solicitar teste de anticorpos para verificar sinais de infecção e para formas graves ultrassonografia. O tratamento da esquistossomose, para os casos simples, é em dose única e supervisionado feito por meio do medicamento Praziquantel, receitado pelo médico e distribuído gratuitamente pelo Ministério da Saúde. Os casos graves geralmente requerem internação hospitalar e até mesmo tratamento cirúrgico, conforme cada situação',
      symotomsName: ['Febre', 'Dor de cabeça', 'Calafrios', 'Suores', 'Fraqueza', 'Falta de apetite', 'Dor muscular', 'Tosse', 'Diarreia', 'Diarreia mais constante, alternando-se com prisão de ventre', 'Tonturas', 'Sensação de plenitude gástrica', 'Prurido (coceira) anal'],
      imgDoenca: 'img/paginas/doencas/ascaridiase.webp',
      source:'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/e/esquistossomose',
    },
  ]
  private DetalheSubject = new BehaviorSubject<Detalhe | undefined>(undefined);
  dado$: Observable<Detalhe | undefined> = this.DetalheSubject.asObservable();
  constructor(private activedrouter : ActivatedRoute){}
  ngOnInit(): void {

  this.activedrouter.params.subscribe( (parametros) =>{
    const idParametro = Number(parametros['id']);

    const detalhes = this.Detalhes.find((Detalhes) => Detalhes.id  === idParametro );

    if(detalhes){
      this.DetalheSubject.next(detalhes);
      console.log(this.dado$);
    }else{
      console.log("Erro --> O método find esta retornando 'undefield'");
    }
  }
  )
}
}
