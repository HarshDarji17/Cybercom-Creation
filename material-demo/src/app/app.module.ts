import { ReactiveFormsModule } from '@angular/forms';
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
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import {EmployeeService} from './shared/employee.service';
import { FormFieldComponent } from './form-field/form-field.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { CardComponent } from './card/card.component';





@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonComponent,
    ButtonToggleComponent,
    BadgeComponent,
    ProgessspinerComponent,
    NavbarComponent,
    EmployeesComponent,
    EmployeeComponent,
    FormFieldComponent,
    GridListComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
