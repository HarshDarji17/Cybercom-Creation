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
import { TabsComponent } from './tabs/tabs.component';
import { MenuComponent } from './menu/menu.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { TableComponent } from './table/table.component';
import { StepperComponent } from './stepper/stepper.component';





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
    TabsComponent,
    MenuComponent,
    PaginatorComponent,
    TableComponent,
    StepperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
