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
     public myshops : Shop[];
  // private data : Observable<number>;

  constructor( private shopService : ShopService, private locationSerice : LocationService) {

  }

   like(s){
      this.shopService.likeShop(s);

   }

    dislike(s){

      localStorage.setItem(s,JSON.stringify(['disliked',new Date()]));

  }

  ngOnInit() {
      this.start();

    }

      start(){
          this.shopService.getShops().subscribe(data=> {
              this.myshops = data;
              }
          );


      }

    isDisliked(s) : object{
        if(localStorage.getItem(s)){

             let dislikeTime =  new Date(JSON.parse(localStorage.getItem(s))[1]).getTime();
             let now = new Date().getTime();

            let timeDiff = (now - dislikeTime)/(1000*3600);
           // console.log(timeDiff +" " + s);

        if (JSON.parse(localStorage.getItem(s))[0] == "disliked" && timeDiff < 2 ){  //check if shop is disliked and period of dislike is more than 2 hours

              return {'display' :'none'};
          }}

      }

}
