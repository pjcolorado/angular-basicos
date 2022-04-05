import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  //titulo = 'Contador app';        //es valido
  //titulo: string = 'Contador app';  //es valido
  public titulo: string = 'Acumulador app'; //es mas valido con TS
  public numero: number = 10;

  base: number = 5;

  //Segunda Forma
  sumar(){
    this.numero+=1;
  }
  restar(){
    this.numero-=1;
  }

  //Tercera Forma
  acumular(valor: number) {
    this.numero += valor;
  }

  //Cuarta


}


