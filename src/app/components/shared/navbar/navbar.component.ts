import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }

  buscarHeroe( valor:string){
    //Para que este metodo busque hay que crear una funcion nueva en heroes.service.ts -->
    //Y luego indicamos a la ruta que debe navegar la llamada de la funcion
    this.router.navigate( ['/buscador', valor])
  }

}
