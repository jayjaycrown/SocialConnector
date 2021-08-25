/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable no-underscore-dangle */
import { NgForm } from '@angular/forms';
import { GrServiceService } from 'src/app/_services/gr-service.service';
import { AppService } from 'src/app/_services/app.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { format } from 'date-fns';
import * as moment from 'moment';
import { LoadingController, ToastController } from '@ionic/angular';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { DatePipe } from '@angular/common';

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
  model: any = {};
  maxroomForm: NgForm;
  roomCountForm: NgForm;
  usersCountForm: NgForm;
  date_entered: any[] = [];
  no_rooms: number[] = [];
  date_enteredgr: any[] = [];
  no_roomsgr: number[] = [];
  hour: any[] = [];
  no_rooms2: number[] = [];
  hourgr: any[] = [];
  no_rooms2gr: number[] = [];
  hour2: any[] = [];
  no_users: number[] = [];
  hour2gr: any[] = [];
  no_usersgr: number[] = [];
  date_entered2: any[] = [];
  no_users2: number[] = [];
  date_entered2gr: any[] = [];
  no_users2gr: number[] = [];

  public lineChartData: ChartDataSets[] = [
    { data: this.no_rooms, label: 'No of rooms' },
  ];
  public lineChartData2: ChartDataSets[] = [
    { data: this.no_rooms2, label: 'No of rooms' },
  ];
  public lineChartData3: ChartDataSets[] = [
    { data: this.no_users, label: 'No of users' },
  ];
  public lineChartData4: ChartDataSets[] = [
    { data: this.no_users2, label: 'No of users' },
  ];
  public lineChartLabels: Label[] = this.date_entered;
  public lineChartLabels2: Label[] = this.hour;
  public lineChartLabels3: Label[] = this.hour2;
  public lineChartLabels4: Label[] = this.date_entered2;

  public lineChartDatagr: ChartDataSets[] = [
    { data: this.no_roomsgr, label: 'No of rooms' },
  ];
  public lineChartData2gr: ChartDataSets[] = [
    { data: this.no_rooms2gr, label: 'No of rooms' },
  ];
  public lineChartData3gr: ChartDataSets[] = [
    { data: this.no_usersgr, label: 'No of users' },
  ];
  public lineChartData4gr: ChartDataSets[] = [
    { data: this.no_users2gr, label: 'No of users' },
  ];
  public lineChartLabelsgr: Label[] = this.date_enteredgr;
  public lineChartLabels2gr: Label[] = this.hourgr;
  public lineChartLabels3gr: Label[] = this.hour2gr;
  public lineChartLabels4gr: Label[] = this.date_entered2gr;
  public lineChartColors: Color[] = [
    {
      // grey
      backgroundColor: 'rgba(9, 175, 252, .7)',
      borderColor: 'rgba(9, 175, 252,1)',
      pointBackgroundColor: '#fff',
      pointBorderColor: 'rgba(9, 175, 252,1)',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177, 0.8)',
      pointBorderWidth: 3,
    },
  ];
  public lineChartColors2: Color[] = [
    {
      // grey
      backgroundColor: 'rgba(20, 128, 0, 0.7)',
      borderColor: 'green',
      pointBackgroundColor: '#fff',
      pointBorderColor: 'green',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      pointBorderWidth: 3,
    },
  ];
  public lineChartColors3: Color[] = [
    {
      // green
      backgroundColor: 'rgba(77,83,96,0.7)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'white',
      pointBorderColor: 'rgba(77,83,96,1)',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)',
      pointBorderWidth: 3,
    },
  ];
  public lineChartColors4: Color[] = [
    {
      // green
      backgroundColor: 'rgba(122, 111, 180, 0.7)',
      borderColor: 'rgba(56, 34, 179,1)',
      pointBackgroundColor: 'white',
      pointBorderColor: 'rgba(56, 34, 179,1)',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(56, 34, 179,1)',
      pointBorderWidth: 3,
    },
  ];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };

  public lineChartLegend = false;
  public lineChartType: ChartType = 'bar';
  public lineChartType2: ChartType = 'bar';
  public lineChartType3: ChartType = 'bar';
  public lineChartType4: ChartType = 'bar';
  public lineChartPlugins = [];

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
    // this.getWeeklyTopRooms();
    // this.getWeeklyTopRoomsgr();
    this.weeklyRooms();
    this.roomsCount();
    this.roomsCountgr();
    this.usersCount();
    this.usersCountgr();
    this.weeklyUsers();
    this.weeklyUsersgr();
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

  async weeklyRooms() {
    this.date_entered.length = 0;
    this.no_rooms.length = 0;
    const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading',
    });
    await loading.present();
    this.app
      .getMaxroomsinWeek(this.api_token, this.date)
      .subscribe(async (res: any) => {
        await loading.dismiss();
        // console.log(res);
        const data = res.result;
        for (const x of data) {
          // const datepipe: DatePipe = new DatePipe('en-US');
          // const formattedDate = datepipe.transform(x.date, 'h:mm a');
          // console.log(formattedDate);
          const no_rooms: number = parseFloat(x.no_rooms);
          const date = x.date;
          this.no_rooms.push(no_rooms);
          this.date_entered.push(date);
        }
        // console.log(this.no_rooms);
        // console.log(this.date_entered);
      });
    // this.model = {};
  }

  async weeklyUsers() {
    this.date_entered2.length = 0;
    this.no_users2.length = 0;
    this.app
      .getusersinweek(this.api_token, this.date)
      .subscribe(async (res: any) => {
        const data = res.result;
        for (const x of data) {
          const no_rooms: number = parseFloat(x.no_users);
          const date = x.date;
          this.no_users2.push(no_rooms);
          this.date_entered2.push(date);
        }
        console.log(this.no_users2);
        console.log(this.date_entered2);
      });
  }

  async weeklyUsersgr() {
    this.date_entered2gr.length = 0;
    this.no_users2gr.length = 0;
    this.gr
      .getusersinweek(this.api_token, this.date)
      .subscribe(async (res: any) => {
        const data = res.result;
        for (const x of data) {
          const no_rooms: number = parseFloat(x.no_users);
          const date = x.date;
          this.no_users2gr.push(no_rooms);
          this.date_entered2gr.push(date);
        }
      });
  }

  weeklyRoomsgr() {
    this.date_enteredgr.length = 0;
    this.no_roomsgr.length = 0;
    this.gr
      .getMaxroomsinWeek(this.api_token, this.date)
      .subscribe((res: any) => {
        // console.log(res);
        const data = res.result;
        for (const x of data) {
          const no_rooms: number = parseFloat(x.no_rooms);
          const date = x.date;
          this.no_roomsgr.push(no_rooms);
          this.date_enteredgr.push(date);
        }
        // console.log(this.no_rooms);
        // console.log(this.date_entered);
      });
    // this.date = moment().format('YYYY-MM-DD');
    // this.model = {};
  }

  async roomsCount() {
    this.hour.length = 0;
    this.no_rooms2.length = 0;

    this.app
      .getRoomsCount(this.api_token, this.date)
      .subscribe(async (res: any) => {
        // await loading.dismiss();
        // console.log(res);
        const data = res.result;
        for (const x of data) {
          // const datepipe: DatePipe = new DatePipe('en-US');
          // const formattedDate = datepipe.transform(x.date, 'h:mm a');
          // console.log(formattedDate);
          const no_rooms: number = parseFloat(x.no_rooms);
          const date = x.hour;
          this.no_rooms2.push(no_rooms);
          this.hour.push(date);
        }
        // console.log(this.no_rooms2);
        // console.log(this.hour);
      });
    // this.model = {};
  }

  async roomsCountgr() {
    this.gr
      .getRoomsCount(this.api_token, this.date)
      .subscribe(async (res: any) => {
        // await loading.dismiss();
        // console.log(res);
        const data = res.result;
        for (const x of data) {
          // const datepipe: DatePipe = new DatePipe('en-US');
          // const formattedDate = datepipe.transform(x.date, 'h:mm a');
          // console.log(formattedDate);
          const no_rooms: number = parseFloat(x.no_rooms);
          const date = x.hour;
          this.no_rooms2gr.push(no_rooms);
          this.hourgr.push(date);
        }
        // console.log(this.no_rooms2gr);
        // console.log(this.hourgr);
      });
    // this.model = {};
  }

  async usersCount() {
    this.hour2.length = 0;
    this.no_users.length = 0;

    this.app
      .getUsersCount(this.api_token, this.date)
      .subscribe(async (res: any) => {
        // await loading.dismiss();
        // console.log(res);
        if (res.status === 'success') {
          const data = res.result;
          for (const x of data) {
            const no_users: number = parseFloat(x.no_users);
            const hour = x.hour;
            this.no_users.push(no_users);
            this.hour2.push(hour);
          }
          // console.log(this.no_users);
          // console.log(this.hour);
        } else {
          this.presentToast(res.message, 'danger');
        }
      });
    // this.model = {};
  }

  async usersCountgr() {
    this.hour2gr.length = 0;
    this.no_usersgr.length = 0;

    this.gr
      .getUsersCount(this.api_token, this.date)
      .subscribe(async (res: any) => {
        // await loading.dismiss();
        // console.log(res);
        if (res.status === 'success') {
          const data = res.result;
          for (const x of data) {
            const no_users: number = parseFloat(x.no_users);
            const hour = x.hour;
            this.no_usersgr.push(no_users);
            this.hour2gr.push(hour);
          }
          // console.log(this.no_users);
          // console.log(this.hour);
        } else {
          this.presentToast(res.message, 'danger');
        }
      });
    // this.model = {};
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

  onSubmit(ev) {
    // console.log(ev);

    let date = this.model.date;
    date = format(new Date(date), 'yyyy-MM-dd');
    // console.log(date);
    this.date = date;
    this.weeklyRooms();
    this.weeklyRoomsgr();
    this.weeklyUsers();
    this.weeklyUsersgr();
    this.roomsCount();
    this.roomsCountgr();
    this.usersCount();
    this.usersCountgr();
    setTimeout(() => {
      this.date = moment().format('YYYY-MM-DD');
    }, 3000);
  }

  public randomize(): void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
  }

  public randomize2(): void {
    // console.log('ddd');
    this.lineChartType2 = this.lineChartType2 === 'bar' ? 'line' : 'bar';
  }

  public randomize3(): void {
    // console.log('ddd');
    this.lineChartType3 = this.lineChartType3 === 'bar' ? 'line' : 'bar';
  }

  public randomize4(): void {
    // console.log('ddd');
    this.lineChartType4 = this.lineChartType4 === 'bar' ? 'line' : 'bar';
  }

  async presentToast(message, color) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 2000,
    });
    toast.present();
  }
}
