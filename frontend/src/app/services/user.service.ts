import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    _id: '',
    name: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
    role: 'USER'
  }

  noAuthHeader = { headers: new HttpHeaders({ 'noauth': 'True'})};

  constructor(private http: HttpClient) { }

    //Metodos Http
    postUser(user: User){
      return this.http.post(environment.apiUrl+'/register', user, this.noAuthHeader)
    }
  
    login(authCredentials) {
      return this.http.post(environment.apiUrl + '/authenticate', authCredentials, this.noAuthHeader);
    }

    getUserProfile() {
      return this.http.get(environment.apiUrl + '/userProfile');
    }

    //metodos auxiliares
    setToken(token: string) {
      localStorage.setItem('token', token);
    }

    getToken() {
      return localStorage.getItem('token');
    }

    deleteToken() {
      localStorage.removeItem('token');
    }

    getUserPayLoad(){
      var token = this.getToken();
      if (token){
        var userPayLoad = atob(token.split('.')[1]);
        return JSON.parse(userPayLoad);
      } else {
        return null;
      }
    }

    isLoggedIn() {
      var userPayLoad = this.getUserPayLoad();
      if (userPayLoad){
        return userPayLoad.exp > Date.now() / 1000;
      } else {
        return false;
      }
    }
}