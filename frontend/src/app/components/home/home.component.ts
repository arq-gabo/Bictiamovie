import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

=======
import { MoviedbService } from '../../services/moviedb.service';
>>>>>>> sim
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
<<<<<<< HEAD
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

=======
export class HomeComponent {

  nuevasPeliculas: any[] = [];
  loading: boolean;

  constructor(private moviedb: MoviedbService) {

    this.loading = true;

    this.moviedb.getDiscoverMovies()
      .subscribe((data: any) => {

        console.log(data);
        this.nuevasPeliculas = data;
        this.loading = false;
      });

  }


>>>>>>> sim
}
