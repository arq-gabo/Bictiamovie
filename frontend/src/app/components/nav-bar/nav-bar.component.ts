import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  //normalmente se usa intancia privada pero me genera un error, cambie a publico
  constructor( public userService: UserService) { }

  ngOnInit(): void {
  }

}
