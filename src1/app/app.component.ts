import { ToggleService } from './_services/toggle.service';
import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { NavigationEnd, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { NgZone } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { AnalyticsService } from './_services/analytics.service';
import { UpdateService } from './_services/update.service';
import { FcmService } from './_services/fcm.service';
// eslint-disable-next-line @typescript-eslint/naming-convention
const { App } = Plugins;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild('tabs', { static: false }) tabs: IonTabs;
  selectedTab: string;
  showLabel: boolean;
  constructor(
    private platform: Platform,
    // private statusBar: StatusBar,
    // private splashScreen: SplashScreen,
    // private deeplinks: Deeplinks,
    private router: Router,
    private zone: NgZone,
    private analyticsService: AnalyticsService,
    private updateService: UpdateService,
    private fcmService: FcmService,
    private toggle: ToggleService
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.toggle.toggle();
    this.fcmService.initPush();
    // this.analyticsService.startTrackerWithId('UA-162534875-1');
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.analyticsService.trackView(
          event.urlAfterRedirects,
          event.urlAfterRedirects
        );
      }
    });
    this.platform.ready().then(() => {
      this.updateService.checkForUpdate();
      // App.addListener('appUrlOpen', (data: any) => {
      //   this.zone.run(() => {
      //     // Example url: https://beerswift.app/tabs/tab2
      //     // slug = /tabs/tab2

      //     // const slug = data.url.split('/room/').pop();
      //     // alert(data.url);
      //     // console.log(data.url)
      //     if (data.url.search('clubhouse') >= 0) {
      //       const slug = data.url.split('/room/').pop();
      //       // alert(slug);
      //       if (slug) {
      //         this.router.navigateByUrl('/tabs/chtools/track/' + slug);
      //       }
      //       //
      //     }

      //     if (data.url.search('spotifygr') >= 0) {
      //       const slug = data.url.split('link/').pop();
      //       // alert(slug);
      //       if (slug) {
      //         this.router.navigateByUrl('/tabs/grtools/track/' + slug);
      //       }
      //       //
      //     }

      //     // If no match, do nothing - let regular routing
      //     // logic take over
      //   });
      // });
    });
  }
}
