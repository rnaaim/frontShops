import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  username : string;
  password : string;
  confirmPassword : string;
  constructor( private loginService : LoginService) { }

  register(){
    this.loginService.register(this.email,this.username,this.password,this.confirmPassword).subscribe(data=>
     {console.log(data)});
     console.log('Hello world');
  }
  ngOnInit() {
  }

}
