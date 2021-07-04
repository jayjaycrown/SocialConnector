import { Injectable } from '@angular/core';
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
  Capacitor
} from '@capacitor/core';
import { Router } from '@angular/router';
 
const { PushNotifications } = Plugins;
 
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
    PushNotifications.requestPermission().then((permission) => {
      if (permission.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // No permission for push granted
      }
    });
 
    PushNotifications.addListener(
      'registration',
      (token: PushNotificationToken) => {
        console.log('My token: ' + JSON.stringify(token));
      }
    );
 
    PushNotifications.addListener('registrationError', (error: any) => {
      console.log('Error: ' + JSON.stringify(error));
    });
 
    PushNotifications.addListener(
      'pushNotificationReceived',
      async (notification: PushNotification) => {
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
          this.router.navigateByUrl(`/home/details/${data}`);
        }
        console.log('Push received: ' + JSON.stringify(notification));
      }
    );
 
    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      async (notification: PushNotificationActionPerformed) => {
        const data = notification.notification.data;
        console.log('Action performed: ' + JSON.stringify(notification.notification));
        if (data.detailsId) {
         var d = encodeURIComponent(data.detailsId);
          this.router.navigateByUrl(`/home/details/${d}`);
        }
      }
    );
  }
}