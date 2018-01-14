import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import {LoginService} from './login.service';
import  {ShopService} from './shop.service';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

const myRoutes : Routes = [{
  path : 'login',component : LoginComponent
},{
  path : 'shops',component : ShopComponent
},{
  path : 'user/shops', component : UserComponent
},{
    path : 'register',component : RegisterComponent
},{
  path : '', redirectTo : '/', pathMatch : 'full'
},];


@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myRoutes),
      HttpClientModule,FormsModule
  ],
  providers: [LoginService, ShopService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
