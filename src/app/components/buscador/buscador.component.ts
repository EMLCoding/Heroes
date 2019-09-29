import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
    selector: 'buscador',
    templateUrl: './buscador.component.html',
  })

  export class BuscadorComponent implements OnInit{
    
    heroes:any[] = [];//Para ir guardando las coincidencias de heroes encontrados en el buscador
    valor:string;

    //ActivatedRoute guarda información acerca de la ruta a esta instancia
    constructor(private activatedRoute: ActivatedRoute,
                private _heroesService: HeroesService, private router: Router){}

    ngOnInit(){
        this.activatedRoute.params.subscribe(params =>{
            this.valor = params['valor'];
            this.heroes = this._heroesService.buscarHeroes( params['valor']);
            console.log(this.heroes);
        })
    }

    verHeroe(index: number){
      this.router.navigate(['/heroe', index]);
    }

  }