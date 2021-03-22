import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs'


@Injectable()


export class MessagingService {

  currentMessage = new BehaviorSubject(null);

  constructor(private angularFireMessaging: AngularFireMessaging) {

    this.angularFireMessaging.messages.subscribe(
      (_messaging:AngularFireMessaging) => {
        _messaging.onMessage = _messaging.onMessage.bind(_messaging);
        _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      }
    )
  }
  requestPermission() {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log(token);
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }
  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload) => {
        console.log("new message received. ", payload);
        this.currentMessage.next(payload);
        this.showCustomNotification(payload);
      })
  }
          
  showCustomNotification(payload:any) {
    let notify_data = payload['notification'];
    let title = notify_data['title'];
    let options = {
      body: notify_data['body'],
      icon : "./assets/images/logo.jpg",
      badge: "./assets/images/logo.jpg",
      image: "./assets/images/logo.jpg",
    };
    console.log("new message recevied. ", notify_data);
    let notify:Notification = new Notification(title,options)

       notify.onclick = event=>{
       event.preventDefault();
       window.location.href = "https://www.google.com";
    }
  }
}