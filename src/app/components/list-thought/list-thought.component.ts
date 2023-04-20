import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../thoughts/thought.service';
import { Thought } from '../thoughts/thought/thought';
import { Router } from '@angular/router';

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
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';
  favoritos: boolean = false;
  listaFavoritos: Thought[] = [];
  titulo: string = 'Meu Mural';

  constructor(private service: ThoughtService, private router: Router) {}

  // ngOnInit(): void {
  //   this.service.listar();
  // }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos) => {
      this.listaPensamentos.push(...listaPensamentos);
    });
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe(listaPensamentos => {
      this.listaPensamentos = listaPensamentos;
    });
  }

  listarFavoritos(){
    this.titulo = 'Meu Favoritos';
    this.favoritos = true;
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe(listaPensamentosFavoritos => {
      this.listaPensamentos = listaPensamentosFavoritos;
      this.listaFavoritos = listaPensamentosFavoritos;
    });
  }

  recarregarComponente(){
    // location.reload(); // recarrega toda a página
    this.favoritos = false;
    this.paginaAtual = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
      if(!listaPensamentos.length){
        this.haMaisPensamentos = false;
      }
    });
  }
}
