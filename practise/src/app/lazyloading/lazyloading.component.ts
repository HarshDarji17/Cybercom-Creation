import { Component, OnInit } from '@angular/core';
import { ViewContainerRef, ComponentFactoryResolver}from '@angular/core';

@Component({
  selector: 'app-lazyloading',
  templateUrl: './lazyloading.component.html',
  styleUrls: ['./lazyloading.component.css']
})
export class LazyloadingComponent {

  constructor(  private viewContainer:ViewContainerRef,
          private cfr:ComponentFactoryResolver){}
  
          async loadAdmin()
          {
            this.viewContainer.clear();
            const {AdminlistComponent} = await import('../adminlist/adminlist.component')
            this.viewContainer.createComponent(
               this.cfr.resolveComponentFactory(AdminlistComponent)
            )
          }
          async loadUser()
          {
            this.viewContainer.clear();
            const {UserlistComponent} = await import('../userlist/userlist.component')
            this.viewContainer.createComponent(
               this.cfr.resolveComponentFactory(UserlistComponent)
            )}
}