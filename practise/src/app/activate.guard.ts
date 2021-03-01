import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from './user.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {

    constructor(private userservice:UserService , private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
    if(this.userservice.isAdminRights()){
      return true;
  }else{
    alert("you dont't have permission to view this page , Rerdirecting to home");
    this.router.navigate(['Home']);
      return false;
  }
}
}
