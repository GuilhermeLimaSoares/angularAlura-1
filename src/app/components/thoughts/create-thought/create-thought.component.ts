import { ThoughtService } from './../thought.service';
import { Thought } from './../thought/thought';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent implements OnInit {
  //   pensamento: Thought = {
  //     id: 1,
  //     conteudo: 'Aprendendo Angular',
  //     autoria: 'Dev',
  //     modelo: 'Modelo1'
  // }

  pensamento: Thought = {
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  constructor(private service: ThoughtService, private router: Router) {}

  ngOnInit(): void {}

  createThought() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancelThought() {
    this.router.navigate(['/listarPensamento'])
  }
}
