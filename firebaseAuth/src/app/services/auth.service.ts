import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Injectable  } from '@angular/core';
import {AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';
import auth from 'firebase/app';
import  firebase from 'firebase/app';





@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: any = null;  // data going to the firebase

  constructor(public afu: AngularFireAuth,  public afs: AngularFirestore , public router: Router )  { 
  this.afu.authState.subscribe((auth =>{
    this.authState = auth;
  }))
}
  
   //All firebase get data function

  get isuserAnonymousLoggedIn(): boolean {
    return (this.authState!== null) ?this.authState.isAnonymous : false 
  }

  get currentUserId(): string {
     return(this.authState !== null) ? this.authState.uid : ''
   }

  get currentUserName(): string {
    return(this.authState['email'])
  }

  get currentuser() : any {
    return(this.authState !== null ) ? this.authState : null;
   }
     
  get isUserEmailLoggedIn(): boolean {
    if(( this.authState !== null) && (!this.isuserAnonymousLoggedIn)) {
      return true
    }
    else{
      return false
    }
  }
  loginWithEmail(email: string, password: string)
  {
    return this.afu.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

  registerWithEmail(email: string, password: string) {
    return this.afu.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

  singout(): void
  {
    this.afu.signOut();
    this.router.navigate(['/login']);  // sign out btn click then we can redirect to login out
  }

  

                 // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  // // Auth logic to run auth providers
  
  // AuthLogin(provider) {
  //   return this.afu.signInWithPopup(provider)
  //   .then((result) => {
  //       this.router.navigate(['userinfo']);
        
  //   //  this.authState(result.user);
  //    console.log(result.user)
  //   }).catch((error) => {
  //     window.alert(error)
  //   })
  // }
// Auth logic to run auth providers
AuthLogin(provider) {
  return this.afu.signInWithPopup(provider)
  .then((result) => {
     
        this.router.navigate(['userinfo']);
     
    // this.SetUserData(result.user);
   
  }).catch((error) => {
    window.alert(error)
  })
}
   
}