import { Component, OnInit } from '@angular/core';
import {shops} from '../data';
import {Shop} from '../shop.model';
import {ShopService} from '../shop.service';
import {LoginService} from '../login.service';
import {element} from 'protractor';
import {forEach} from '@angular/router/src/utils/collection';
import {LocationService} from '../location.service';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
     public myshops : Shop[];
     public currentLocation ;
    path: string[] = ['distance'];
    order: number = 1;

  constructor( private shopService : ShopService, private locationSerice : LocationService,private loginService: LoginService,private router : Router) {

      if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(position => {
              this.currentLocation = position.coords;
              console.log(this.currentLocation);
          },error2 => console.log(error2),{maximumAge:11000, timeout:10000, enableHighAccuracy:true});
      };
  }

   like(s){
      if(this.loginService.isLoggedIn()) {
          this.shopService.likeShop(s);
      } else{
          this.router.navigate(['/login']);
      }
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
              console.log(typeof this.myshops)
              if(this.myshops) {
                  for (let shop of this.myshops) {
                      console.log(typeof shop)
                      if (this.currentLocation) {
                          shop['distance'] = this.getDistance(shop['location']['coordinates'], this.currentLocation);
                      }
                  }
              } else{
                  console.log('My shops is not defined');
              };

              }
          );


      }

    isDisliked(s) : object{
        if(localStorage.getItem(s)){

             let dislikeTime =  new Date(JSON.parse(localStorage.getItem(s))[1]).getTime();
             let now = new Date().getTime();

            let timeDiff = (now - dislikeTime)/(1000*3600); // time in hours

        if (JSON.parse(localStorage.getItem(s))[0] == "disliked" && timeDiff < 2 ){  //check if shop is disliked and period of dislike is more than 2 hours

              return {'display' :'none'};
          }}

      }

      getDistance(location1,location2){

          var deg2Rad = deg => {
              return deg * Math.PI / 180;
          }

          var r = 6371;
          var dLat = deg2Rad(location2.latitude - location1[1]);
          var dLon = deg2Rad(location2.longitude - location1[0]);
          var a =
              Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(deg2Rad(location1[1])) * Math.cos(deg2Rad(location2.latitude)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          var d = r * c;
          return (d.toFixed(2));
      }

}
