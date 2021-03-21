import { AssComponent } from './ass/ass.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationComponent} from  './registration/registration.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'registration' , component:RegistrationComponent},
  {path: 'home' , component:HomeComponent },
  {path:'ass' , component:AssComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
