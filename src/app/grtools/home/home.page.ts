import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, MenuController, ToastController } from '@ionic/angular';
import { AppService } from '../../_services/app.service';
import { Router, RouterEvent } from '@angular/router';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  activeIndex;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Pages = [
    {
      title: 'Track',
      url: '/tabs/grtools/track',
      icon: 'analytics'
    },
    {
      title: 'Room History',
      url: '/tabs/grtools/room-history',
      icon: 'options'
    },

    {
      title: 'Weekly Report',
      url: '/tabs/grtools/weekly-report',
      icon: 'stats-chart'
    },
    {
      title: 'Weekly Comparison',
      url: '/tabs/grtools/weekly-comparison',
      icon: 'repeat'
    },


    {
      title: 'Account Stats',
      url: '/tabs/grtools/account-stat',
      icon: 'pie-chart'
    },

  ];

  selectedPath = '';
  constructor(private router: Router, private menu: MenuController, private auth: AuthService) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
   }

    // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }


}
