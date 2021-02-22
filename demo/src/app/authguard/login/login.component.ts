import { Routes, Router } from '@angular/router';
import { MyServiceService } from './../../service/my-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[MyServiceService]
})
export class LoginComponent implements OnInit {

  constructor(private routes : Router, private service : MyServiceService)  { }
  msg="";
  ngOnInit() {
}

check(uname: string, p : string)
  {
    var output = this.service.checkusernameandpassword(uname, p);
    if(output == true)
    {
      this.routes.navigate(['/dashboard']);
    }
    else{
this.msg ='Invalid username or password';
    }
 
 
}


}
