import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  // checked(uname: string, pwd : string)
  // {
  //       if(uname == "admin" && pwd =="admin123"){
  //        sessionStorage.setItem('username',"admin");
  //                  return true;
  // }
  //       else{
  //              return false;
  //            }
  //   }

  login(username: string, password: string) {  
    if (username == "admin" && password == "admin") {  
      sessionStorage.setItem('currentUser', "loggedin");  
      return true;  
    }  
  }  
  logout() {  
    sessionStorage.removeItem('currentUser');  
  }  
  public get loggedIn(): boolean {  
    return (sessionStorage.getItem('currentUser') !== null);  
  }  
  
}
