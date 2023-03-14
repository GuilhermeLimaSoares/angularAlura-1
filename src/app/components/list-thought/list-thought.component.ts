import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css']
})
export class ListThoughtComponent implements OnInit {
  listaPensamentos = [{
    conteudo: 'Passa informacoes para o componente filho',
    autoria: 'Componente pai',
    modelo: 'modelo3'
  },{
    conteudo: 'Minha prpriedade é decorada com @Input',
    autoria: 'Angular',
    modelo: 'modelo3'
  },
  {
    conteudo: 'Minha prpriedade é decorada com @Input kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk.Minha prpriedade é decorada com @Input kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
    autoria: 'Angular',
    modelo: 'modelo3'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
