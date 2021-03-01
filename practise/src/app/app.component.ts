import { UserlistComponent } from './userlist/userlist.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { UserService } from './user.service';
import { Component ,ViewContainerRef, ComponentFactoryResolver}from '@angular/core';

interface dataType{
  name:string,
  id:number,
  indian:boolean,
  address:any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practise';


  onSubmit(data:any){
    console.warn(data);
  }


  // lazy loading concept
  // constructor(  private viewContainer:ViewContainerRef,
  //      private cfr:ComponentFactoryResolver){}

  //      async loadAdmin()
  //      {
  //        this.viewContainer.clear();
  //        const {AdminlistComponent} = await import('./adminlist/adminlist.component')
  //        this.viewContainer.createComponent(
  //           this.cfr.resolveComponentFactory(AdminlistComponent)
  //        )
  //      }

  //      async loadUser()
  //      {
  //        this.viewContainer.clear();
  //        const {UserlistComponent} = await import('./userlist/userlist.component')
  //        this.viewContainer.createComponent(
  //           this.cfr.resolveComponentFactory(UserlistComponent)
  //        )
  //      }


  // getData(){
  //   const data:dataType={
  //    name:'harsh',
  //    id:1,
  //    indian:true,
  //    address:'vadagam 389230'
  //   }
  //   return data;
  // }


  //  data= [] 
  // constructor(private user:UserService){
  //  this.user.getData().subscribe(data=>{
  //    console.warn(data)
  //    this.data = data
  //  })    
  }

//   data = "harshu darji" child to parent
//   parentcomponent(data: any){
// console.log(data)
//   }


