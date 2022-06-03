import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor:number = 0;

  @Output() mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  incrementa(){
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor})
  }

  decrementa(){
    if (this.valor > 0){
      this.valor--;
      this.mudouValor.emit({novoValor: this.valor})
    }
  }
}
