import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    public userService: UserService,
    private router: Router
  ) { }

  user = {
    email: '',
    password: ''
  }
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      res => {
        console.log(res);
        this.userService.setToken(res['token']);
        alert('Welcome to bictia Movies')
        this.router.navigateByUrl('/subaccount');
      },
      err => {
        this.serverErrorMessages = err.error.message;
        alert(this.serverErrorMessages);
      }
    );
  }
}
