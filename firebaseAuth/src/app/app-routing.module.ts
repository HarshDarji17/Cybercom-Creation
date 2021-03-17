

import { HomeComponent } from '../app/pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserinfoComponent } from './pages/userinfo/userinfo.component';
import {EmployeeComponent} from './pages/employee/employee.component';

import { ManageProductsComponent } from './pages/manage-products/manage-products.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'userinfo', component: UserinfoComponent },
  // {path: 'glogin', component:HomeComponent},
  {path: 'employee', component:EmployeeComponent},

  {path:'products' , component:ManageProductsComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
