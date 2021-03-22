

import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReactiveformComponent} from './components/reactiveform/reactiveform.component';

const routes: Routes = [
 {path:'rform' , component:ReactiveformComponent} ,

 {path:'product'  , 
       loadChildren :()=>import('./module/product/product.module').then (m=>m.ProductModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
           ReactiveFormsModule   
  ]
})
export class AppRoutingModule { }
