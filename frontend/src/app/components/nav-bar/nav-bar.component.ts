import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public userDetails: any;

  constructor( public userService: UserService,
                private router: Router) { }

  ngOnInit(): void {

  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/'])
  }
}
