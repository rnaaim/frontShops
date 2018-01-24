import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username : string;
    password : string;
    error : string
  constructor( private authService : LoginService, private  router : Router) { }

  login(){
      //console.log(this.username);
      this.authService.login(this.username,this.password).subscribe(data=>{
          console.log(data);
      this.router.navigate(['/shops']);
      }, loginerror => this.error ='Verify your username and password');

  }

  checklogin(): boolean {
        return this.authService.isLoggedIn();
  }

  ngOnInit() {

  }

}
