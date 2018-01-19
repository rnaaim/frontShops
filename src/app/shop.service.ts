import { Injectable } from '@angular/core';
import {Shop} from './shop.model';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {LoginService} from './login.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ShopService {

  private url = 'http://localhost:8000/api';
  constructor( private http : HttpClient,  private  authService : LoginService) {

  }

  getShops() : Observable<Shop[]> {
      console.log(this.authService.token)
      let headers = new HttpHeaders().set('Authorization','Bearer ' + localStorage.getItem('refreshToken') );
      return this.http.get(this.url + '/shops',{headers: headers}).map(res => <Shop[]> res['result']);
  }

    getUserShops() : Observable<Shop[]>{

        let headers = new HttpHeaders().set('Authorization','Bearer ' + localStorage.getItem('refreshToken') );
        return this.http.get(this.url + '/user/shops',{headers: headers}).map(res => <Shop[]> res['result']);
    }

    likeShop(id) {
        console.log(localStorage.getItem('refreshToken'))
        let headers = new HttpHeaders().set('Authorization','Bearer ' + localStorage.getItem('refreshToken') );
        headers = headers.set('content-type', 'application/x-www-form-urlencoded');
      console.log(headers);
        return this.http.put(this.url + '/shop/like/' + id,JSON.stringify(id),{headers: headers}).subscribe(data => {
            console.log(data);
     });



        }

        dislikeShop(id){
        console.log(localStorage.getItem('refreshToken'))
        let headers = new HttpHeaders().set('Authorization','Bearer ' + localStorage.getItem('refreshToken') );
        headers = headers.set('content-type', 'application/x-www-form-urlencoded');
        console.log(headers);
        return this.http.put(this.url + '/shop/dislike/' + id,JSON.stringify(id),{headers: headers}).subscribe(data => {
            console.log(data['message']);})
    }


}
