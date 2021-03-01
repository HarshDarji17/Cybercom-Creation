import { HomeComponent } from './../../home/home.component';
import { NgModule ,Component} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserslistComponent } from './userslist/userslist.component';





const routes: Routes = [
  { path: 'userlist', component: UserslistComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
