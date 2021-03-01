import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandeactivateGuard } from 'src/app/core/services/deactivate/candeactivate.guard';
import { HomeComponent } from '../../home/home.component';
import { MyaccountComponent } from './myaccount/myaccount.component';



const routes: Routes = [

     {        path: 'myaccount',
              component: MyaccountComponent ,
              canDeactivate: [CandeactivateGuard]
     },
     {        path: '**',
              component: HomeComponent 
     }
];


@NgModule({
  imports: [RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AccountRoutingModule { }