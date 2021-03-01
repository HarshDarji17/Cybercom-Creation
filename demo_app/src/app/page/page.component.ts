
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import {AuthenticationService} from './../core/services/auth/authentication.service';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private router:Router , private  authenticationservice :AuthenticationService) { }

  ngOnInit() {
  }

  logout() {
    this.authenticationservice.logout();
    this.router.navigate(['']);
 }

}
