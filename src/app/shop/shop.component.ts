import { Component, OnInit } from '@angular/core';
import {shops} from '../data';
import {Shop} from '../shop.model';
import {ShopService} from '../shop.service';
import {LoginService} from '../login.service';
import {element} from 'protractor';
import {forEach} from '@angular/router/src/utils/collection';
import {LocationService} from '../location.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
   private myshops = [];
   private mylocation;
   private data : Observable<number>;
  constructor( private shopService : ShopService, private locationSerice : LocationService) {

  }

   like(s){
      this.shopService.likeShop(s);
   }


  ngOnInit() {
      this.start(); //  console.log(this.locationSerice.getCurrentPosition());
    }

      start(){
          this.shopService.getShops().subscribe(data=> {
              this.myshops = data['result'];
              console.log(this.mylocation)
              for( let shop of this.myshops){
                  shop['test'] = 1;
              }
          });


      }
      
}
