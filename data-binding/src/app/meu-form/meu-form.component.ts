import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  nome!:any;

  pessoa:any = {
    nome: 'def',
    idade: 28,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
