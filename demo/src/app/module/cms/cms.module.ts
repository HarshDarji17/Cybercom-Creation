
import { NgModule } from '@angular/core';

import { CmsComponent } from './cms.component';
import { CmsRoutingModule } from './cms-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [CmsComponent],
  imports: [
    CommonModule,
    CmsRoutingModule
  ]
})

export class CmsModule { }
