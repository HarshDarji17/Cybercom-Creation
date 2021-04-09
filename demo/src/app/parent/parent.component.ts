import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
   users:any = [];
   count=''
   // for Users
  //  pushUsers(data:any){
  //    console.log(data);
  //    this.users.push(data);
  //    console.log(this.users)

  // }
 
  // users =[];
  pushUsers(data:any){
    this.users.push(data);
  }
  onRemoveUsers(item:any){
    this.users.splice(item, 1)
  
  }
  

  
      

  // for Admins
  admins :any =[];
  pushAdmins(data:any){
    this.admins.push(data);
  }
  onRemoveAdmins(item: number){
    this.admins.splice(item, 1)
  }

  ngOnInit():void{
    this.count=this.users.length;
    console.log(count);
  } 

}
