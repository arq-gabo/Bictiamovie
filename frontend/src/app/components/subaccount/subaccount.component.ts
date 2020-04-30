import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService} from '../../services/user.service';
import { MoviedbService} from '../../components/subaccount/moviedb.service';


@Component({
  selector: 'app-subaccount',
  templateUrl: './subaccount.component.html',
  styleUrls: ['./subaccount.component.css']
})
export class SubaccountComponent implements OnInit {
  
  userDetails;

  constructor(
    private userService: UserService,
    private router: Router,
    public _ms:MoviedbService) {
    this._ms.getDiscoverMovies().subscribe(data=>console.log(data));
   }

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      },
      err => {
        console.log(err);
      }
    )
  }

}
