import { Component, OnInit } from '@angular/core';
import {ShopService} from '../shop.service';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    userShops = [];
    constructor( private shopService : ShopService,private loginService : LoginService) {

        this.shopService.getUserShops().subscribe(data=> {
            this.userShops = data['result'];
            console.log(this.userShops);
        });}

  ngOnInit() {
  }

}
