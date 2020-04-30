import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-subaccount',
  templateUrl: './nav-bar-subaccount.component.html',
  styleUrls: ['./nav-bar-subaccount.component.css']
})
export class NavBarSubaccountComponent implements OnInit {
  public userDetails: any;
  constructor(public userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/'])
  }
}
