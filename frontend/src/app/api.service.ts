import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(protected http: HttpClient) { }
  getApi(){
    return this.http.get('https://randomuser.me/api/?results=25');
  }

}
