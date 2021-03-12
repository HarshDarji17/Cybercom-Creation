import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {SwPush, SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'angular-pwa'; 
   apiData:any;

   data;
   private readonly publicKey ="BODmcAvjES6-93hVoDFjenaCBdvyGX8Y9VbUyxCSCkYMF1ScA6EoQ9wNh1-x7BJawlco3gALFPZEy93bBTaL7YM";
  constructor( private http: HttpClient, private swUpdate:SwUpdate ,  private swPush: SwPush) {}
  
  ngOnInit(){
    
    this.pushSubscription();

    //  saw notification 
      this.swPush.messages.subscribe((message) => console.log(message));
     // direct open url
    this.swPush.notificationClicks.subscribe(
      ({ action , notification}) => {
        window.open(notification.data.url);
      });
      //  call to the dummy api and store data in apiData

    this.http.get('https://reqres.in/api/users?page=2').subscribe(
      (res:any) =>
      {
        this.apiData =  res.data;
      }, err =>{
        console.error(err);
      }
    )
    this.reloadCache();
  }

  // if update then show confirmation massage
  reloadCache() {                             
    if(this.swUpdate.isEnabled) {             
      this.swUpdate.available.subscribe(event => {
        console.log('current version is', event.current);
        console.log('available version is', event.available);
        if(confirm("New version Available !, Whould you like to update ?")) {
          window.location.reload();
        }
      });
    }
  }
  // SwPush service
  pushSubscription() {
    if(!this.swPush.isEnabled) {
      console.log('Notification Not Enabled');
      return;
    }
    // this.swPush.unsubscribe().then(() => {}); uused for unsubscribe 
    this.swPush
      .requestSubscription({
        serverPublicKey: this.publicKey,
      })
        .then((sub) => console.log(JSON.stringify(sub)))
        .catch((err) => console.log(err));
  }
}

   
  

