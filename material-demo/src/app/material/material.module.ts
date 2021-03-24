import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';



 const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  ReactiveFormsModule,
  FormsModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatCardModule
 ]



@NgModule({
  declarations: [],
  imports: [
    MaterialComponents
  ],
  exports:[MaterialComponents]
})
export class MaterialModule { }
