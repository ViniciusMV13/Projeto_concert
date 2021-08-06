import { ModuleWithProviders, NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewuserComponent } from './newuser/newuser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ListaComponent } from './lista/lista.component';
import { HomeComponent } from './home/home.component';



const APP_ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegisterComponent},
    {path: 'criacao', component: NewuserComponent},
    {path: 'edicao', component: EdituserComponent},
    {path: 'dashboard', component: ListaComponent},
    {path: '', component: HomeComponent},
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

declare module "@angular/core" {
    interface ModuleWithProviders<T = any> {
        ngModule: Type<T>;
        providers?: Provider[];
    }
}