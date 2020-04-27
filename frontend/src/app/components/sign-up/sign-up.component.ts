import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [UserService]
})

export class SignUpComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(public userService: UserService,
              private router: Router
              ) {}

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    console.log(form.value)
    this.userService.postUser(form.value).subscribe(
      res =>{
        console.log(res);
        alert('Welcome to Bictia Movies');
        this.router.navigate(['/subaccount']);
      },
      err => {
        if(err.status === 422){
          this.serverErrorMessages = err.error;
          alert(this.serverErrorMessages);
          this.router.navigate(['/singup']);
        } else {
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
          alert(this.serverErrorMessages);
          this.router.navigate(['/']);
        }
      }
    )
  }
}
