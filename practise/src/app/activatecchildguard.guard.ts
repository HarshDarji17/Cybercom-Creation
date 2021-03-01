import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';

@Injectable({
  providedIn: 'root'
})
export class ActivatecchildguardGuard implements CanActivateChild {
  constructor(private userservice:UserService , private router:Router){}
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.userservice.isChildRights()) 
      {
      
      return true;
      }
      else{
        alert("ypu don't permission to view this child page , redirecting to home");
        this.router.navigate(['home']);
        return false;
      }

  }
  
}


