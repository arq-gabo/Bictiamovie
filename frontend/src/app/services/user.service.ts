import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  signUp(user){
    return this.http.post<any>(this.URL + '/users/signup', user);
  }

  signIn(user){
    return this.http.post<any>(this.URL + '/users/signin', user);
  }

  //metodo para saber si el usuario esta logueado
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  //metodo para retornar el token desde el localStorage
  getToken(){
    return localStorage.getItem('token');
  }
}
