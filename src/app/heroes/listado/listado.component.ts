import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spider Man', 'Iron Man', 'Thor', 'Hulk', 'Capitan America'];
  heroeB: string = '';
 /*  deletedHeroes: string[] = []; */
  borrarHeroe(){
    
    this.heroeB = this.heroes.shift() || '';
  }

/*   deleteHero(i: number): void {
    this.deletedHeroes.push(this.heroes[i]);
    this.heroes.splice(i, 1);
  } */

}
