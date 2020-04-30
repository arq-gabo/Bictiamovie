import { RegistroComponent } from './components/registro/registro.component';
import { SliderComponent } from './components/slider/slider.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { PeliculaComponent } from "./components/pelicula/pelicula.component"; 
export const ROUTES: Routes = [
  
  { path: "", component: NavbarComponent},
//  { path : "slider", component: SliderComponent},
  { path: "nav", component: NavbarComponent },
  { path: "home", component: HomeComponent },
  { path: "search", component: SearchComponent },
  {path : "registro", component: RegistroComponent},
  { path: "pelicula/:id", component: PeliculaComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];
