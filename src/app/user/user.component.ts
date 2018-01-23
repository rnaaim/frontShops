import { Component, OnInit } from '@angular/core';
import {ShopService} from '../shop.service';
import {LoginService} from '../login.service';
import {ChangeDetectorRef} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Shop} from '../shop.model';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    public userShops : Shop[];
    path: string[] = ['distance'];
    order: number = 1;
    myurl;
    constructor( private shopService : ShopService,private loginService : LoginService, private router : Router) {
}

  ngOnInit() {
        this.start();
         this.myurl = this.router.url;
  }


  start() {

      this.shopService.getUserShops().subscribe(data => {
          this.userShops = data;

      });


  }

  dislike(s){
       this.shopService.dislikeShop(s);
       this.start();

  }
}
