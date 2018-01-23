import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  username : string;
  password : string;
  error_username : string;
  error_email : string;
  account_created : string;
  code: number;
  constructor( private loginService : LoginService,private  router : Router) { }

  register(){

          this.loginService.register(this.email, this.username, this.password).subscribe(data => { this.code = data['code'];
          console.log(this.code)
          if(this.code == 0){
                  this.error_email = "Email taken";
              }
              if(this.code == 1){
                  this.error_username = "Username taken";
              }
              if(this.code == 2){
                 alert("Your accound has been created");
                 this.router.navigate(['/login']);
              }
          });




  }
  ngOnInit() {
  }

}
