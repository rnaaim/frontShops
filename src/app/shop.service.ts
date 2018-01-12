import { Injectable } from '@angular/core';
import {Shop} from './shop.model';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {LoginService} from './login.service';

@Injectable()
export class ShopService {

  private url = 'http://localhost:8000/api';
  constructor( private http : HttpClient,  private  authService : LoginService) {

  }

  getShops() : Observable<Shop[]> {
      console.log(this.authService.token)
      let headers = new HttpHeaders().set('Authorization','Bearer ' + localStorage.getItem('refreshToken') );
      return this.http.get(this.url + '/shops',{headers: headers}).map(res => <Shop[]> res);
  }

    getUserShops() : Observable<Shop[]> {
        console.log(this.authService.token)
        let headers = new HttpHeaders().set('Authorization','Bearer ' + localStorage.getItem('refreshToken') );
        return this.http.get(this.url + '/user/shops',{headers: headers}).map(res => <Shop[]> res);
    }



  }
