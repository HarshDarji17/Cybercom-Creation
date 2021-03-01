import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from './../core/services/auth/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {


   username : string;
   password : string;
   
  constructor( private _auth: AuthenticationService , private router:Router) {
    if(this._auth.loggedIn){
      this.router.navigate(['login']);
    }
  }

  login():void{
    if (this.username != '' && this.password != '')
     if(this._auth.login(this.username , this.password)) {
       this.router.navigate(["/page"]);
     }
      else 
       
       alert("wrong username or password");
  }
      


  ngOnInit(): void {
  }

}
