
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorHandler} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthguardGuard } from './service/authguard.guard';
import { ResReqComponent } from './res-req/res-req.component';
import { ReqResLoginComponent } from './req-res-login/req-res-login.component';
import {MatCardModule} from '@angular/material/card';
import { globalErrorHandler } from './error/global-errorHandler';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    ResReqComponent,
    ReqResLoginComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule ,
    MatCardModule
  ],
  providers: [AuthguardGuard,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
