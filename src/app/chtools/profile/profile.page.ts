import { Router } from '@angular/router';
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import * as moment from 'moment';
import { AppService } from './../../_services/app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  id: string;
  page = 1;
  api_token: any;
  date: string;
  details: any = {};
  profile: any = {};
  rooms: any[];
  data: any = {};
  durationDays: string;
  loaddata = false;
  constructor(
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private app: AppService,
    private router: Router
  ) {
    this.route.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('id');
    });
  }

  async ngOnInit() {
    const user: any = await JSON.parse(localStorage.getItem('user'));
    const result = user.result;
    this.api_token = result.api_token;
    this.date = moment().format('YYYY-MM-DD');

    this.getUserProfile();
  }

  async getUserProfile() {
    const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading',
    });
    await loading.present();
    this.app
      .getUsersProfiles(this.api_token, this.id, this.date, this.page)
      .subscribe(async (res: any) => {
        this.loaddata = true;
        await this.loadingController.dismiss();
        console.log(res);
        if (res.status === 'success') {
          this.details = res.result;
          this.profile = this.details.profile;
          this.data = JSON.parse(this.profile.data);
          // console.log(this.data);
          this.rooms = this.details.rooms;
        }
      });
  }

  getDateDiff(now, end) {
    const data = now.split();
    const testing = data[0].replace(/-/g, '/');
    const data2 = end.split();
    const testing2 = data2[0].replace(/-/g, '/');
    // const datta2 = dattta[0].replace(/T/g, ' ');
    const duration = moment(testing2, 'YYYY/MM/DD HH:mm:ss').diff(
      moment(testing, 'YYYY/MM/DD HH:mm:ss')
    );
    // const days = duration.asHours();
    const secssss = moment.duration(duration).seconds();
    const minsss = moment.duration(duration).minutes();
    const hrsss = Math.trunc(moment.duration(duration).asHours());
    this.durationDays = hrsss + ':' + minsss + ':' + secssss;
    // console.log(this.durationDays);
    return this.durationDays;
  }

  onClick(channel: string) {
    this.router.navigateByUrl('/tabs/chtools/track/' + channel);
  }
}
