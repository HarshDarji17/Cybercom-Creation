
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { PipeComponent } from './core/pipe/pipe.component';

import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { MerchantComponent } from './merchant/merchant.component';




import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { StudentComponent } from './student/student.component';
import {MycomponentComponent} from './mycomponent/mycomponent.component';
import {ActivateGuard } from './activate.guard';;
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import { DeactivateGuard } from './deactivate.guard';
import { CustomerComponent } from './customer/customer.component';
import { ActivatecchildguardGuard } from './activatecchildguard.guard';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { LazyloadingComponent } from './lazyloading/lazyloading.component';
import { GuardComponent } from './guard/guard.component';
import {TemplateDformComponent} from './template-dform/template-dform.component';




const routes: Routes = [

  { path : 'guard' , component:GuardComponent},
{ path: '' , component:HomeComponent},

{path:'home', component:HomeComponent},

{path: 'admin' , component: AdminComponent ,canActivate:[ActivateGuard]},

{path: 'merchant' , component: MerchantComponent ,canDeactivate:[DeactivateGuard]},


{path: 'customer' , component: CustomerComponent ,canActivateChild:[ActivatecchildguardGuard],
      children:[
        {path:'add' , component:AddcustomerComponent}
      ]
},

{ path: 'student' , component:StudentComponent},

{path: 'pipe' , component: PipeComponent},

{path : 'alert' , component: SweetAlertComponent},


{path: 'template' , component:TemplateDformComponent},

{ path: 'reactive'  , component : ReactiveFormComponent},

{ path: 'mycom', component:MycomponentComponent},

{ path: 'login', component:LoginComponent},




];




@NgModule({
  declarations:[
   
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule 
  ]
})
export class AppRoutingModule { }
export const routingComponents = [
                                 StudentComponent
]
