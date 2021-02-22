import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyConfigurationComponent } from './../company-configuration/company-configuration.component';

const routes: Routes = [
  { path: 'company-configuration', component: CompanyConfigurationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }