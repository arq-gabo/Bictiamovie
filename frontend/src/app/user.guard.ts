/*import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})

'UserGuard' funcion para verificar si existe un token o no, si existe retorna true
y muestra los datos, caso contrario retorna false y nos redirecciona a signin para 
obtener un token

export class UserGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
  ){}

  canActivate(): boolean{
    if (this.userService.loggedIn()){
      return true;
    }
   
    this.router.navigate(['/signin']);
    return false;
  }
 
}

 */