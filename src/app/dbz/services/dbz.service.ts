import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    //1-propiedades
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

    //2-gets y sets
    get personajes(): Personaje[] {
        
        return [...this._personajes]; //Evita pasar por referencia el objeto privado haciendo una copia del mismo
    }

    //3-Constructor
    constructor() {
        console.log('servicio inicializado')

    }

    //4-Metodos
    agregarPersonaje( data : Personaje){
        if (data.nombre.trim().length === 0) { return; }
        
        this._personajes.push(data);
    }

}