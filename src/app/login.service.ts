import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor( private http : HttpClient) { }

  login(username : string,password : string){

     let body = new HttpParams().set('_username',username);
     body = body.set('_password',password);
    let headers = new HttpHeaders().append('Content-Type','application/x-www-form-urlencoded');
     this.http.post('http://localhost:8000/login_check',body.toString(),{headers : headers}).subscribe(data => {
       console.log(data);
     });
  }

}

