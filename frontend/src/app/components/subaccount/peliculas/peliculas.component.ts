import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../moviedb.service';
import { ActivatedRoute} from '@angular/router';
// import { HttpClientJsonModule } from '@angular/common/http'

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {

 // pelicula: any;
 pelicula: any = {};
 loadingPelicula: boolean;
 //aqui va la implementacion para las iframe de youtobe


 Onward: string ="Onward";
 Mortal_Kombat: string= "Mortal Kombat Legends: Scorpions Revenge"; 
 

 constructor(private router: ActivatedRoute,
   private moviedb: MoviedbService) {

   this.loadingPelicula = true;

   this.router.params.subscribe(params => {
     console.log(params);

     this.moviedb.getPelicula(params['id'])
       .subscribe(pelicula => {
         console.log(pelicula);
         this.pelicula = pelicula;
         this.loadingPelicula = false;
       })
   })

 } 

}
