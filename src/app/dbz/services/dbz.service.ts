import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    constructor() {
        console.log('servicio inicializado')

    }

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 7500
        }
    ];

    get personajes(): Personaje[] {
        return [...this._personajes]; //Evita pasar por referencia el objeto privado
    }

}