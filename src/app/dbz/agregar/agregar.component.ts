import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  //Lo que recibe este componente, desde quien lo consume
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  //Lo que genera este componente, hacia quien lo consume
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  //Evento del boton agregar
  agregar() {
    if (this.nuevo.nombre.trim().length === 0) { return; }

    this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    };
  }

  constructor( private dbzService: DbzService) { }

}
