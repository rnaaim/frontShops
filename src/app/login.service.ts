import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders, HttpParams,HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class LoginService {

    public token ;
    constructor(private http: HttpClient) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token
    }

    login(username: string, password: string): Observable<Boolean> {

        let body = new HttpParams().set('_username', username);
        body = body.set('_password', password);
        let headers = new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('http://localhost:8000/login_check', body.toString(), {headers: headers}).map(res => {
          if(res['token']){
              this.token = res['token'];
              console.log(this.token);
              localStorage.setItem(username,JSON.stringify({username : username, token: this.token}));
              localStorage.setItem('refreshToken',this.token);

              return true;
          } else{
              return false;
          }
        });
    }

      register(email:string,username:string,password:string,confirmPassword :string) {

          let body = new HttpParams().set('_email', email);
          body = body.set('_username', username);
          body = body.set('_password', password);
          body = body.set('_confirmPassword', confirmPassword);
          let headers = new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded');
          console.log(body.toString())
          return this.http.post('http://localhost:8000/register', body.toString(), {headers: headers}).map(res => {
          return res});

      }

    logout(){
        localStorage.setItem('refreshToken',null);
    }
}

