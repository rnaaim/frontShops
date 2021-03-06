import { Component } from '@angular/core';
import {LoginService} from './login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( public loginService : LoginService,private router: Router){

  }

  getCurrentPath() : string{
     return this.router.url;
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['/']);

  }
}
