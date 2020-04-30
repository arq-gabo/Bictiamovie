// import { Component, OnInit } from '@angular/core';
import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.css']
 })
export class CartasComponent {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  verPelicula(item: any) {

    let peliculaId;

    peliculaId = item.id;
   

    this.router.navigate(["/pelicula", peliculaId]);
  }
}