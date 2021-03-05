import { DataService } from './core/services/data/data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
 import {CmsModule } from './modules/cms/cms.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListService } from './core/services/users/user-list.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { AccountModule } from './modules/account/account.module';
import {LoginComponent} from './login/login.component';
import { AvtivateGuard} from './core/services/auth/avtivate.guard';
import {AuthenticationService} from './core/services/auth/authentication.service';
import {CandeactivateGuard} from './core/services/deactivate/candeactivate.guard';
import { CruiseFormComponent } from './cruise-form/cruise-form.component';

import { ChildComponent } from './child/child.component';
import { RegistrationdetailsComponent } from './registrationdetails/registrationdetails.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { AesEncryptDecryptComponent } from './aes-encrypt-decrypt/aes-encrypt-decrypt.component';

import { ClipboardModule } from 'ngx-clipboard';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageComponent,
    LoginComponent,
    CruiseFormComponent,
    ChildComponent,
    RegistrationdetailsComponent,
    RegisterformComponent,
    AesEncryptDecryptComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    AccountModule,
    CmsModule,
    ProductsModule,
    UsersModule ,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule

  ],
  providers: [UserListService, AvtivateGuard,AuthenticationService,CandeactivateGuard,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
