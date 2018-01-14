import { Component, OnInit } from '@angular/core';
import {shops} from '../data';
import {Shop} from '../shop.model';
import {ShopService} from '../shop.service';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
   myshops = [];
  constructor( private shopService : ShopService) {

      this.shopService.getShops().subscribe(data=> {
          this.myshops = data['result'];
  });}


   like(s){
      this.shopService.likeShop(s);
   }

  ngOnInit() {
    }

}
