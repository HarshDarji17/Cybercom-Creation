import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './module/employee/employee.component';
import { CmsComponent } from './module/cms/cms.component';
import { CompanyComponent } from './module/company/company.component';
import { NotFoundComponent } from './module/not-found/not-found.component';
import { AuthguardGuard } from './service/authguard.guard';
import { LoginComponent } from './authguard/login/login.component';
import { DashboardComponent } from './authguard/dashboard/dashboard.component';
import { ResReqComponent } from './res-req/res-req.component';
import { ReqResLoginComponent } from './req-res-login/req-res-login.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'login1', component: ReqResLoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthguardGuard] },

  { path: 'list', component: ResReqComponent }
  ,
  {
    path: 'employee',
    component: EmployeeComponent,
    loadChildren: () => import('./module/employee/employee.module').then(m => m.EmployeeModule),
  },
  {
    path: 'cms',
    component: CmsComponent,
    loadChildren: () => import('./module/cms/cms.module').then(m => m.CmsModule),
  },
  {
    path: 'company',
    component: CompanyComponent,
    loadChildren: () => import('./module/company/company.module').then(m => m.CompanyModule),
  },




  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule, CommonModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeComponent,
  CmsComponent,
  CompanyComponent,
  NotFoundComponent,
  // LoginComponent,
  DashboardComponent,
  ResReqComponent,
  ReqResLoginComponent



]
