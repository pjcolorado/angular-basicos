import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //declarations: lo que contiene el modulo actual
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //exports: lo que es visible fuera del modulo actual
    exports: [
        ListadoComponent
    ],
    //imports: otros modulos que usa este modulo actual
    imports: [
        CommonModule
    ]
})
export class HeroesModule { }