
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { Routes, RouterModule } from '@angular/router';
import {AccountRoutingModule}  from './account-routing.module';
 



@NgModule({
  declarations: [ MyaccountComponent],
  imports: [AccountRoutingModule,
    CommonModule,
  
  ]
})
export class AccountModule { }
