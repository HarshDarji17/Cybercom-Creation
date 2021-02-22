import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RouterModule, Router } from '@angular/router';
import { MyServiceService } from './my-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
 
  constructor(private routes : Router){}

  
  canActivate(
    
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(localStorage.getItem('username')!= null){
        return true;
          }
          else
          {
            this.routes.navigate(['/login']);
            return false;
          }
  }
  
}
