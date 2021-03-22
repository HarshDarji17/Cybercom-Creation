import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountDetailsComponent } from './account-details/account-details.component';


@NgModule({
  declarations: [AccountDetailsComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    AccountDetailsComponent
  ]
  
})
export class AccountModule { }
