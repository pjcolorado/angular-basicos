import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['SpiderMan', 'IronMan','Hulk', 'Thor', 'CapitanA'];

  heroeBorrado: string = '';

  borrarHeroe(): void{
    
    this.heroeBorrado = this.heroes.shift() || '';
  }

  ngOnInit(): void {  
  }

}
