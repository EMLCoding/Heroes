import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';//"Input" va a permitir que este componente reciba informacion de otro componente del proyecto
/* Output y EventEmitter van de la mano y permite mandar informacion a otro component */
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any = {};//El @Input() indica que la propiedad "heroe" puede venir de otro componente
  @Input() indice:number;

  @Output() heroeSeleccionado:EventEmitter<number> //heroeSeleccionado será lo que se envíe a otro component."number" porque va a remitir el "indice"

  constructor(private router:Router,) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  verHeroe(){
    /* FORMA 1 DE HACERLO */
    this.router.navigate(['/heroe',this.indice]);
    /* --------------------------- */
    /* FORMA 2 DE HACERLO */
    //Se quiere que este metodo emita informacion al metodo verHeroe del componente padre (heroes.component)
    /* this.heroeSeleccionado.emit(this.indice); *///Se emite el indice del heroe al que hemos dado "ver mas" (interfaz html)
    //Luego hay que indicar, en el component deseado y metodo deseado, que esté a la escucha y preparado para recibir este indice. Ver heroes.component.ts y .html
    /* --------------------------------------------------------- */
  }

}
