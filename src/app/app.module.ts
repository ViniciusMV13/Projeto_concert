import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewuserComponent } from './newuser/newuser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NewuserComponent,
    NewuserComponent,
    EdituserComponent,
    HomeComponent,
    ListaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
