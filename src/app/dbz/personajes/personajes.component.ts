import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  //@Input('data')  personajes: any[] = []; //poner un nombre especifico al parametro de input, se ve en el HTML padre que llama 
                                            //a este componente
  //@Input()  personajes: Personaje[] = [];

  //Expone la lista de items traidos del servicio
  get personajes(){
    return this.dbzService.personajes;
  }

/**
 *
 */
constructor(private dbzService : DbzService) {
  
}

}
