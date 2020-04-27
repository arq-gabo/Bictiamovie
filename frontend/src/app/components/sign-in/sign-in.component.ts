import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  model = {
    email: '',
    password: ''
  }

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

/*
  signIn(){
    this.userService.signIn(this.user)
      .subscribe(
        res => {
          console.log(res);
          console.log(res.name);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/subaccount']);
        },
        err => console.log(err)
      )
  }*/
}
