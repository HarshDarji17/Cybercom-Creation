
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorHandler} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthguardGuard } from './service/authguard.guard';


@NgModule({
  declarations: [
    AppComponent,
   
   

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [AuthguardGuard,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
