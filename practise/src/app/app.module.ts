import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ActivateGuard} from './activate.guard';
import { MerchantComponent } from './merchant/merchant.component';
import { DeactivateGuard } from './deactivate.guard';
import { CustomerComponent } from './customer/customer.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ActivatecchildguardGuard } from './activatecchildguard.guard';
import { CustomeStyleDirective } from './custome-style.directive';
import {HttpClientModule} from '@angular/common/http';
import { UserlistComponent } from './userlist/userlist.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PipeComponent } from './core/pipe/pipe.component';
import { GuardComponent } from './guard/guard.component';
import {LazyloadingComponent} from './lazyloading/lazyloading.component';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { TemplateDformComponent } from './template-dform/template-dform.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { DirectivveComponent } from './directivve/directivve.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ProductsService } from './appservicses/products.service';




   



@NgModule({

  declarations: [
    AppComponent,
    MycomponentComponent,
    LoginComponent,
    AdminComponent,
    MerchantComponent,
    CustomerComponent,
    AddcustomerComponent,
    CustomeStyleDirective,
    UserlistComponent,
    AdminlistComponent,
    ReactiveFormComponent,
    PipeComponent,
    GuardComponent,
    LazyloadingComponent,
    SweetAlertComponent,
    TemplateDformComponent,
    ParentComponent,
    ChildComponent,
    RegistrationFormComponent,
    DirectivveComponent,
    ManageProductsComponent,
   
   
  
   
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [ ActivateGuard, DeactivateGuard,ActivatecchildguardGuard,ProductsService ,],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
