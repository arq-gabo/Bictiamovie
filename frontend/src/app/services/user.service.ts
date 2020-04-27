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
    role: 'USER'
  }

  constructor(private http: HttpClient) { }

    postUser(user: User){
      return this.http.post(environment.apiUrl+'/register', user)
    }
  
}
