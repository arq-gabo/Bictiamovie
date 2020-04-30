import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviedbService } from "../../services/moviedb.service";

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {

  // pelicula: any;
  pelicula: any = {};
  loadingPelicula: boolean;
  //aqui va la implementacion para las iframe de youtobe


  Onward: string ="Onward";
  Mortal_Kombat: string= "Mortal Kombat Legends: Scorpions Revenge"; 
  The_Willoughbys: string = "The Willoughbys";
  Spies_in_Disguise: string = "Spies in Disguise";
  Frozen: string = "Frozen";
  Cars: string = "Cars";
  LEGO_DC_Shazam: string ="LEGO DC: Shazam! Magic and Monsters";
  Zootopia: string = "Zootopia";
  Fine: string ="冴えない彼女の育てかた Fine";
  Aladdin: string = "Aladdin";
  Trolls_World_Tour: string = "Trolls World Tour";
  Inside_Out: string = "Inside Out";
  Big_Hero_6: string = "Big Hero 6";
  shin: string = "クレヨンしんちゃん 嵐を呼ぶ アッパレ!戦国大合戦";
  Toy_Story_4: string = "Toy Story 4";
  Ralph_Breaks_the_Internet: string = "Ralph Breaks the Internet";
  Red_Shoes_and_the_Seven_Dwarfs: string = "Red Shoes and the Seven Dwarfs";
  animacion: string = "君の名は。";
  Frozen_II: string = "Frozen II";
  evolution: string = "デジモンアドベンチャー LAST EVOLUTION 絆";


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
  /* 
    getPelicula(id: string) {
  
      this.loadingPelicula = true;
  
      this.moviedb.getPelicula( parametros['id'])
    } */


}

