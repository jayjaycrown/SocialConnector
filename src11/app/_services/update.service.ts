import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Plugins } from '@capacitor/core';

// eslint-disable-next-line @typescript-eslint/naming-convention
const { NativeMarket } = Plugins;

interface AppUdate {
  current: string;
  enabled: boolean;
  msg?: {
    title: string;
    msg: string;
    btn: string;
  };
  majorMsg?: {
    title: string;
    msg: string;
    btn: string;
  };
  minorMsg?: {
    title: string;
    msg: string;
    btn: string;
  };
}
@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  update = 'https://app.clubhousetools.xyz/version.json';
  // maintenance = 'https://app.clubhousetools.xyz/maintenance.json';
  constructor(
    private http: HttpClient,
    private alertController: AlertController,
    private appVersion: AppVersion,
    private iab: InAppBrowser,
    private plt: Platform
  ) {}

  async checkForUpdate() {
    this.http.get(this.update).subscribe(async (info: AppUdate) => {
      // console.log('result', info);
      if (!info.enabled) {
        this.presentAlert(info.msg.title, info.msg.msg);
      } else {
        const versionNumber = await this.appVersion.getVersionNumber();
        const splittedVersion = versionNumber.split('.');
        const serverVersion = info.current.split('.');
        if (serverVersion[0] > splittedVersion[0]) {
          this.presentAlert(
            info.majorMsg.title,
            info.majorMsg.msg,
            info.majorMsg.btn
          );
        } else if (serverVersion[1] > splittedVersion[1]) {
          this.presentAlert(
            info.minorMsg.title,
            info.minorMsg.msg,
            info.minorMsg.btn,
            true
          );
        }
      }
    });
  }

  openAppstoreEntry() {
    // console.log('Open me...');
    if (this.plt.is('android')) {
      NativeMarket.openStoreListing({
        appId: 'club.gary.socialconnector',
      });
    } else {
      this.iab.create('https://ios.socialconnector.io/', '_blank');
    }
  }

  async presentAlert(header, message, buttonText = '', allowClose = false) {
    const buttons = [];
    if (buttonText !== '') {
      buttons.push({
        text: buttonText,
        handler: () => {
          this.openAppstoreEntry();
        },
      });
    }

    if (allowClose) {
      buttons.push({
        text: 'Close',
        role: 'cancel',
      });
    }
    const alert = await this.alertController.create({
      header,
      message,
      buttons,
      backdropDismiss: allowClose,
    });

    await alert.present();
  }
}
