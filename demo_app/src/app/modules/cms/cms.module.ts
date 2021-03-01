import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { CmslistComponent } from './cmslist/cmslist.component';


@NgModule({
  declarations: [CmslistComponent],
  imports: [
    CommonModule,
    CmsRoutingModule
  ]
})
export class CmsModule { }
