import { NgModule , Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CmslistComponent } from './cmslist/cmslist.component';
import {HomeComponent} from './../../home/home.component';

const routes: Routes = [

  {
    path:'cmslist' , component: CmslistComponent 
  },
   
  {
    path:'**' , component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
