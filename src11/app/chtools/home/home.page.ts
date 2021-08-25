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
      url: '/tabs/chtools/track',
      icon: 'analytics'
    },
    {
      title: 'Room History',
      url: '/tabs/chtools/room-history',
      icon: 'options'
    },
    {
      title: 'Club Analytics',
      url: '/tabs/chtools/club-analytics',
      icon: 'bar-chart'
    },
    {
      title: 'Weekly Report',
      url: '/tabs/chtools/weekly-report',
      icon: 'stats-chart'
    },
    {
      title: 'Weekly Comparison',
      url: '/tabs/chtools/weekly-comparison',
      icon: 'repeat'
    },
    {
      title: 'Club Comparison',
      url: '/tabs/chtools/club-comparison',
      icon: 'copy'
    },
    {
      title: 'Announcements',
      url: '/tabs/chtools/announcements',
      icon: 'mic'
    },
    {
      title: 'Account Stats',
      url: '/tabs/chtools/account-stat',
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
