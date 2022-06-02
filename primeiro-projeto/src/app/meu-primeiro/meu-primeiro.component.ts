import { Component } from "@angular/core";

@Component({
  selector: 'meu-primeiro-component', //Nome da Tag para o Html
  template: `<p>Meu primeiro component com Angular 2!</p>`
})

export class MeuPrimeiroComponent {
  title = 'tentativa';
}
