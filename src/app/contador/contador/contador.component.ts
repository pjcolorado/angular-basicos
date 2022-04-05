import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: ` 
        <h2>{{titulo}}</h2>

        <span>Primera forma</span>
        <button (click)="numero = numero + 1;"> + 1</button>
        <span> {{ numero }} </span>
        <button (click)="numero = numero - 1;"> - 1</button>
        <br>

        <span>Segunda forma</span>
        <button (click)="sumar()"> + 1</button>
        <span> {{ numero }} </span>
        <button (click)="restar()"> - 1</button>
        <br>

        <span>Tercera forma</span>
        <button (click)="acumular(1)"> + 1</button>
        <span> {{ numero }} </span>
        <button (click)="acumular(-1)"> - 1</button>
        <br>

        <span>Cuarta forma</span>
        <button (click)="acumular(base)"> + {{base}}</button>
        <span> {{ numero }} </span>
        <button (click)="acumular(base*-1)"> - {{base}}</button>

    `
})

export class ContadorComponent {
    public titulo: string = 'Acumulador app'; //es mas valido con TS
    public numero: number = 10;

    base: number = 5;

    //Segunda Forma
    sumar() {
        this.numero += 1;
    }
    restar() {
        this.numero -= 1;
    }

    acumular(valor: number) {
        this.numero += valor;
    }
}