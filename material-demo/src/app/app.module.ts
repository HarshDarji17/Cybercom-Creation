import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
          
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypographyComponent } from './typography/typography.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { BadgeComponent } from './badge/badge.component';
import { ProgessspinerComponent } from './progessspiner/progessspiner.component';
import { NavbarComponent } from './navbar/navbar.component';





@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonComponent,
    ButtonToggleComponent,
    BadgeComponent,
    ProgessspinerComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
