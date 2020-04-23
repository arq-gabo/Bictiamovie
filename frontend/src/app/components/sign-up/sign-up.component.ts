import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  //se crea un objeto vacio para llenarlo con un doble enlace de datos
  user = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
    role: 'USER'
  }

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  signUp(){
    this.userService.signUp(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/subaccount']);
        },
        err => console.log(err)
      )
  }

}
