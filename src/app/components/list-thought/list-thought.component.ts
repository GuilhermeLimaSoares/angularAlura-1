import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../thoughts/thought.service';
import { Thought } from '../thoughts/thought/thought';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css'],
})
export class ListThoughtComponent implements OnInit {
  // listaPensamentos = [
  //   {
  //     id: 0,
  //     conteudo: 'Passa informacoes para o componente filho',
  //     autoria: 'Componente pai',
  //     modelo: 'modelo3',
  //   },
  //   {
  //     id: 1,
  //     conteudo: 'Minha prpriedade é decorada com @Input',
  //     autoria: 'Angular',
  //     modelo: 'modelo3',
  //   },
  //   {
  //     id: 2,
  //     conteudo:
  //       'Minha prpriedade é decorada com @Input kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk.Minha prpriedade é decorada com @Input kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
  //     autoria: 'Angular',
  //     modelo: 'modelo3',
  //   },
  // ];

  listaPensamentos: Thought[] = [];

  constructor(private service: ThoughtService) {}

  // ngOnInit(): void {
  //   this.service.listar();
  // }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }
}
