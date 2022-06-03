import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url:string = 'http://loiane.com';
  cursoAngular:boolean = true;

  urlImagem: string = 'https://i.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY';

  valorAtual:string = '';
  valorSalvo:string = '';

  isMouseOver:boolean = false;

  nome!:any;

  pessoa:any = {
    nome: 'def',
    idade: 28,
  };

  nomeDoCurso: string = 'Angular';

  constructor() { }

  ngOnInit(): void {
  }

  getValor(){
    return 2;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado');
  }

  onKeyUp(evento:KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
    //console.log((<HTMLInputElement>evento.target).value);
  }

  salvarValor(valor:string){
    this.valorSalvo = valor;
    console.log(this.valorSalvo);
  }

  onMouseOverOut(){
    this.isMouseOver  = !this.isMouseOver;
  }
}
