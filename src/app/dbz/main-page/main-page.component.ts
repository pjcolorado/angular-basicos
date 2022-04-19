import { Component, OnInit } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

 nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  
 //Evento cuando llega el mensaje del componente agregar
  addNuevoPersonaje( argumento : Personaje ){
    //this.personajes.push(argumento);
  }

  /**
   *
   */
  constructor( private dbzService: DbzService) { }

}
