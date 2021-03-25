import { CardComponent } from './card/card.component';
import { EmployeesComponent } from './employees/employees.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ButtonComponent } from './button/button.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgessspinerComponent } from './progessspiner/progessspiner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GridListComponent } from './grid-list/grid-list.component';

const routes: Routes = [

  {path:'btn', component:ButtonComponent},

  {path:'btn-togl' , component:ButtonToggleComponent},

  {path:'badge' , component:BadgeComponent},

  {path:'progrssspin' , component:ProgessspinerComponent},

  {path:'navbar' , component:NavbarComponent},

  {path:'field' , component:FormFieldComponent},

  {path:'employee' , component:EmployeesComponent},

  {path:'grid'  , component:GridListComponent},

  {path:'card' , component:CardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
