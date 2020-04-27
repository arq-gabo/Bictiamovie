import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  //normalmente se usa intancia privada pero me genera un error, cambie a publico
  // constructor( public userService: UserService) { }
  constructor() { }

  ngOnInit() {
  }

}
