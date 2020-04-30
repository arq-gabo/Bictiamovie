import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [UserService]
})
export class RegistroComponent {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  marked = false;
  constructor(public userService: UserService,
    private router: Router

  ) { }
  onSubmit(form : NgForm){
    console.log(form.value)
    this.userService.postUser(form.value).subscribe(
      res =>{
        console.log(res);
        this.userService.setToken(res['token']);
        alert('Welcome to Bictia Movies');
        this.router.navigateByUrl('/home');
      },
      err => {
        if(err.status === 422){
          this.serverErrorMessages = err.error;
          alert(this.serverErrorMessages);
          this.router.navigate(['/nav']);
        } else {
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
          alert(this.serverErrorMessages);
          this.router.navigate(['/']);
        }
      }
    )
  }

  toggleVisibility(e){
    this.marked= e.target.checked;
  }
}
