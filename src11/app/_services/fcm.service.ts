import { Injectable } from '@angular/core';
import {
  Plugins,
  Capacitor
} from '@capacitor/core';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';
import { Router } from '@angular/router';
import { TokenResult } from '@stripe/stripe-js';
 
// const { PushNotifications } = Plugins;
 
@Injectable({
  providedIn: 'root'
})
export class FcmService {
 
  constructor(private router: Router) { }
 
  initPush() {
    if (Capacitor.platform !== 'web') {
      // alert(1);
      this.registerPush();
    }
  }
 
  private registerPush() {
    PushNotifications.requestPermissions().then((permission) => {
      if (permission.receive === 'granted') {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // No permission for push granted
      }
    });
 
    PushNotifications.addListener(
      'registration',
      (token: Token) => {
        console.log('My token: ' + JSON.stringify(token));
      }
    );
 
    PushNotifications.addListener('registrationError', (error: any) => {
      console.log('Error: ' + JSON.stringify(error));
    });
 
    PushNotifications.addListener(
      'pushNotificationReceived',
      async (notification: PushNotificationSchema) => {
        alert("New Notification")
        let data;
        if(notification.notification != undefined){
           data = notification.notification.data;
        }else{
           data =  notification.data;
        }
        // data = encodeURIComponent(data);
        
        if (data.detailsId) {
          data = encodeURIComponent(data.detailsId);
          // alert(JSON.stringify(data));
          this.router.navigateByUrl(`/tabs/details/${data}`);
        }
        console.log('Push received: ' + JSON.stringify(notification));
      }
    );
 
    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      async (notification: ActionPerformed) => {
        const data = notification.notification.data;
        console.log('Action performed: ' + JSON.stringify(notification.notification));
        if (data.detailsId) {
         var d = encodeURIComponent(data.detailsId);
          this.router.navigateByUrl(`/tabs/details/${d}`);
        }
      }
    );
  }
}