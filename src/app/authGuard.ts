import {CanActivate, Router} from '@angular/router';
import {LoginService} from './login.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class Myguard  implements CanActivate {

     constructor( private  loginService : LoginService,private  router : Router){}


    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
          if(this.loginService.isLoggedIn()){
              return true;
          } else{
              alert("You need to be logged to see this !");
              this.router.navigate(['/login']);
              return false;
          }
    }


}