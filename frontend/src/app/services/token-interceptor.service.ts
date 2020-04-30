import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import { UserService } from '../services/user.service'


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private userService : UserService,private router : Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler) {

      if (req.headers.get('noauth')){
        return next.handle(req.clone());
      } else {
        const clonedreq = req.clone({
          headers: req.headers.set("Authorization", "Bearer " + this.userService.getToken())
        });
        return next.handle(clonedreq).pipe(
          tap(
            event => { },
            err => {
              if (err.error.auth == false){
                // this.router.navigateByUrl('/subaccount');
                this.router.navigateByUrl('/home');
              }
            }
          )
        );
      }
    }
}