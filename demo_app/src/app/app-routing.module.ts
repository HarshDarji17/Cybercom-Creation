import { AesEncryptDecryptComponent } from './aes-encrypt-decrypt/aes-encrypt-decrypt.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { RegistrationdetailsComponent } from './registrationdetails/registrationdetails.component';
import { CruiseFormComponent } from './cruise-form/cruise-form.component';

import { PageComponent } from './page/page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AccountModule } from './modules/account/account.module';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { CmsModule } from './modules/cms/cms.module';
import {LoginComponent} from './login/login.component';
import {AvtivateGuard} from './core/services/auth/avtivate.guard';




const routes: Routes = [

  {
    path:'account' ,  
    loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule ),
  },
  
  {
    path:'user' ,  
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule ),
  },

  
  {
    path:'product' ,  
    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule ),
  },

   
   {
     path:'cms' ,  
     loadChildren: () => import('./modules/cms/cms.module').then(m => m.CmsModule),
  },

  { path: '', redirectTo: "/login", pathMatch: 'full' },
  {
    path:'login' ,
    component:LoginComponent 
  },

  { path:'cruiseform' , component:CruiseFormComponent},


  { path: "registrationdetails" , component:RegistrationdetailsComponent},


  { path:"reg" , component : RegisterformComponent},

  { path:"aes" , component :AesEncryptDecryptComponent},


 

  {
    path:'page' , component:PageComponent ,   canActivate : [AvtivateGuard]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
   
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
