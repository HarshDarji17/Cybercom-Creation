import { ProductComponent } from './product/product.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './../../home/home.component';

const routes: Routes = [

  

  { path: 'productlist', component: ProductComponent },
  { path: '**', component: HomeComponent }
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
