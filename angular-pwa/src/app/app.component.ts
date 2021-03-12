import { HttpClient } from '@angular/common/http';
import {ApplicationRef, Component, OnInit } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  [x: string]: any;

  title = 'angular-pwa';
  apiData: any;


  isSubscribed = false;
  subscribe = 'You Subscribed Successfully !!';
  unSubscribed = 'You Unsubscribed Successfully !!';
  private readonly publicKey = "BODmcAvjES6-93hVoDFjenaCBdvyGX8Y9VbUyxCSCkYMF1ScA6EoQ9wNh1-x7BJawlco3gALFPZEy93bBTaL7YM";


  constructor( private http: HttpClient,
               private swUpdate: SwUpdate, 
               private swPush: SwPush)      
              {
                this.reloadCache();
                this.checkUpdate();
               }

  ngOnInit() {

    this.pushSubscription();

    //  saw notification 
    this.swPush.messages.subscribe((message) => console.log(message));
    // direct open url
    this.swPush.notificationClicks.subscribe(
      ({ action, notification }) => {
        window.open(notification.data.url);
      });
      
    //  call to the dummy api and store data in apiData

    this.http.get('https://reqres.in/api/users?page=2').subscribe(
      (res: any) => {
        this.apiData = res.data;
      }, err => {
        console.error(err);
      }
    )
    
  }

  // if update then show confirmation massage
  reloadCache() {

          // isEnable property 
    if (!this.swUpdate.isEnabled) {
      console.log('Not Enabled !');
      return;
  }

    // available property
   this.swUpdate.available.subscribe(event => {
    console.log('current version is', event.current);
    console.log('available version is', event.available);

    // activateUpdate method
   if(confirm('New version Available !, Whould you like to update ?')) {
    this.swUpdate.activateUpdate().then(() => location.reload());
  }
});

    // activated property
    this.swUpdate.activated.subscribe(event => {
      console.log('previous version is', event.previous);
      console.log('activated version is', event.current);
    });

  }

  // checkForUpdate method
  checkUpdate() {
    this.appRef.isStable.subscribe((isStable) => {
      if(isStable) {
        const timeInterval = interval(8 * 60 * 60 * 1000);

        timeInterval.subscribe(() => {
          this.swUpdate.checkForUpdate().then(() => console.log('checked'));
        });
      }
    });
  }


  // SwPush service 
  pushSubscription() {
    if (!this.swPush.isEnabled) {
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


  // click to show notification
  showNotification() {
    Notification.requestPermission((result) => {
      if (result === 'granted') {
        navigator.serviceWorker.ready.then((registration) => {
          registration.showNotification('Youtube', {
            tag: 'Youtube',
            body: this.isSubscribed ? this.subscribe : this.unSubscribed,
            icon: 'https://www.digitaltveurope.com/files/2019/10/YouTube-Play-Button.jpg',
            vibrate: [20, 50, 10, 20, 20]
          });
        });
      }
    });

    // change isSubscribe variable
    if (this.isSubscribed) {
      this.isSubscribed = false;
    } else {
      this.isSubscribed = true;
    }
  }
}




