import { ThoughtService } from './../thought.service';
import { Thought } from './../thought/thought';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  formulario!: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: [
        'Formulário reativo',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      autoria: [
        'Angular',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      modelo: ['modelo1'],
    });
  }

  createThought() {
    console.log(this.formulario);
    if (this.formulario.valid) {
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
  }

  cancelThought() {
    this.router.navigate(['/listarPensamento']);
  }
}
