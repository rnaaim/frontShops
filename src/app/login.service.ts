import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders, HttpParams,HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class LoginService {

    public token ;
    constructor(private http: HttpClient) {
        const loggedUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = loggedUser && loggedUser.token
    }

    login(username: string, password: string): Observable<Boolean> {

        let body = new HttpParams().set('_username', username);
        body = body.set('_password', password);
        let headers = new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('http://localhost:8000/login_check', body.toString(), {headers: headers}).map(res => {
          if(res['token']){
              this.token = res['token'];
              console.log(this.token);
              localStorage.setItem('loggedUser',JSON.stringify({username : username, token: this.token}));
              localStorage.setItem('refreshToken',this.token);

              return true;
          } else{
              return false;
          }
        }).catch((error : Response) => Observable.throw(error.json() || 'server error'));
    }

      register(email:string,username:string,password:string) : Observable<number>{

          let body = new HttpParams().set('email', email);
          body = body.set('username', username);
          body = body.set('password', password);
          let headers = new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded');
          console.log(body.toString())
          console.log(headers)
          return this.http.post('http://localhost:8000/user/create', body.toString(), {headers: headers}).map(
              (res : Response) => { return res}
              )
          .catch((error : Response) => Observable.throw(error.json() || 'server error'));

      }

    logout() : void{
        this.token = null;
        localStorage.removeItem('loggedUser');
        localStorage.removeItem('refreshToken');
    }

    isLoggedIn() : boolean {
        if((localStorage.getItem('loggedUser')) && !tokenNotExpired(localStorage.getItem('refreshToken'))){
            {
                return true;
            }
        } else {
            return false;
        }
    }



}

