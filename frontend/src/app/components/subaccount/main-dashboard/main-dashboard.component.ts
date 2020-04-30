import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../moviedb.service';


@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {
  nuevasPeliculas:any[]=[];
  loading:boolean;



  constructor(private moviedb:MoviedbService) {
    this.loading=true;
    this.moviedb.getDiscoverMovies().subscribe((data:any)=>{
      console.log(data);
      this.nuevasPeliculas=data;
      this.loading=false;
      
    })

   }

  ngOnInit(): void {
  }

}
