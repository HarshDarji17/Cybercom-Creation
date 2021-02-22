import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmsListComponent } from './../cms-list/cms-list.component';
import { AddCmsComponent } from './../add-cms/add-cms.component';

const routes: Routes = [
  { path: 'add-cms', component: AddCmsComponent },
  { path: 'cms-list', component: CmsListComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
