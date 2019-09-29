import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  
  heroes: Heroe[] = [];

  constructor(private _heroes_service: HeroesService, private router: Router) {
    
   }
  // ngOnInit carga lo que hay dentro por defecto en el component al estar en él en la app web
  ngOnInit() {
    this.heroes = this._heroes_service.getHeroes();
  }

  verHeroe(index: number){
    this.router.navigate(['/heroe', index]);
  }

}
