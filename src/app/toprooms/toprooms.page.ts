import { GrServiceService } from 'src/app/_services/gr-service.service';
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable no-underscore-dangle */
import { AppService } from 'src/app/_services/app.service';
/* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { format } from 'date-fns';
import * as moment from 'moment';
import { LoadingController, ToastController } from '@ionic/angular';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'app-toprooms',
  templateUrl: './toprooms.page.html',
  styleUrls: ['./toprooms.page.scss'],
})
export class ToproomsPage implements OnInit {
  fullData: any;
  durationDays: string;
  type = 'ch';
  month: string;
  month1: string;
  date: string;
  api_token: any;
  fullDatagr: any;

  constructor(
    private router: Router,
    private app: AppService,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private gr: GrServiceService
  ) {}

  async ngOnInit() {
    const user: any = await JSON.parse(localStorage.getItem('user'));
    const result = user.result;
    this.api_token = result.api_token;
    this.date = moment().format('YYYY-MM-DD');
    this.month = moment().format('MM');
    this.month1 = moment().format('MMMM');
    this.getWeeklyTopRooms();
    this.getWeeklyTopRoomsgr();
  }

  async getWeeklyTopRooms() {
    const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading',
    });
    await loading.present();
    this.app
      .WeeklyTopRooms(this.api_token, this.date)
      .subscribe(async (res: any) => {
        await loading.dismiss();
        if (res.status === 'success') {
          this.fullData = res.result;
          // this.fullData = arr.slice(Math.max(arr.length - 3, 0));
          //           date_ended: "2021-07-03 16:07:56"
          // date_started: "2021-07-03 10:11:01"
          // alert(this.thisDay);
        } else {
        }
      });
  }

  async getWeeklyTopRoomsgr() {
    this.gr
      .WeeklyTopRooms(this.api_token, this.date)
      .subscribe(async (res: any) => {
        if (res.status === 'success') {
          this.fullDatagr = res.result;
          // this.fullDatagr = arr.slice(Math.max(arr.length - 3, 0));
          //           date_ended: "2021-07-03 16:07:56"
          // date_started: "2021-07-03 10:11:01"
          // alert(this.thisDay);
        } else {
        }
      });
  }

  onClick(channel) {
    this.router.navigateByUrl('/tabs/chtools/track/' + channel);
  }
  onClick2(channel) {
    this.router.navigateByUrl('/tabs/grtools/track/' + channel);
  }

  getDateDiff(now, end) {
    // console.log(now, end);
    // const now = moment(new Date()); //todays date
    // const end = moment('2015-12-1'); // another date
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

  segmentChanged(ev) {}
}
