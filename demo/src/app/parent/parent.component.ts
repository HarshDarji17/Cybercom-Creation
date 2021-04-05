import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {

  // for Users
  users =[];
  pushUsers(data){
    this.users.push(data);
  }
  onRemoveUsers(item:any){
    this.users.splice(item, 1)
  }

  // for Admins
  admins =[];
  pushAdmins(data){
    this.admins.push(data);
  }
  onRemoveAdmins(item:any){
    this.admins.splice(item, 1)
  }
 

}
