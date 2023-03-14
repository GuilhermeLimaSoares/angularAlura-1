import { Thought } from './../thought/thought';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {
  pensamento: Thought = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'Modelo1'
}

  constructor() { }

  ngOnInit(): void {
  }

  createThought(){

  }

  cancelThought(){

  }

}
