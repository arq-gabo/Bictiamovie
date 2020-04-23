import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  api: any[] = [];
  constructor( 
    protected apiService: ApiService
  ){

  }
  ngOnInit(){
    this.apiService.getApi()
    .subscribe(
      (data) => {
        this.api = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
