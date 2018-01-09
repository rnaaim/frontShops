import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import {LoginService} from './login.service';
import  {ShopService} from './shop.service';


@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    UserComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoginService, ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
