import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AvtivateGuard implements CanActivate {
  constructor( private authentivationservie:AuthenticationService , private router:Router ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // if(this.authentivationservie.checked('username',"admin")){
    //    return true;
    // }else{
    //   alert("You don't have permission to view this page, Redirecting to Page"),
    //   this.router.navigate(['page']);
    // }

    if ( sessionStorage.getItem('currentUser')){
       return true;
    }

    this.router.navigate(['page']);
     return false;
  }
  
}
