import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


//Este es el listado de rutas(paginas a las que se va a poder visitar) del programa web
const APP_ROUTES: Routes = [
    // Ruta para el componente home
    { path: 'home', component: HomeComponent }, // este home es el que se pone en la url -> localhost:4200/home
    //Ruta para el component about
    { path: 'about', component: AboutComponent },
    //Ruta para el component heroes
    { path: 'heroes', component: HeroesComponent },
    //Ruta para el component heroe en funcion de su ID
    { path: 'heroe/:id', component: HeroeComponent },
    //Ruta para el component buscador
    { path: 'buscador/:valor', component: BuscadorComponent},

    { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
