/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { format } from 'date-fns';
import * as moment from 'moment';
import { LoadingController, ToastController } from '@ionic/angular';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { AppService } from 'src/app/_services/app.service';
import { GrServiceService } from './../_services/gr-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  selectedData = 'total_rooms';
  showData = 'total_rooms';
  type = 'ch';
  type2 = 'ch';
  type3 = 'ch';
  api_token: any;
  date: string;
  page = 1;
  month: any;
  current: any = {};
  currentgr: any = {};
  last: any = {};
  lastgr: any = {};
  color = '';
  icon = '';
  show: boolean;
  percTotal: string;
  percTotalgr: string;
  total_listeners: string;
  total_listenersgr: any;
  avg: string;
  new: string;
  avggr: string;
  newgr: string;
  totalColor: any[];
  totalColorgr: any[];
  listenerColor: string[];
  listenerColorgr: string[];
  avgColor: string[];
  newColor: string[];
  avgColorgr: string[];
  newColorgr: string[];
  total_roomsData: number[] = [];
  total_roomsDatagr: number[] = [];
  total_listenersData: number[] = [];
  total_listenersDatagr: number[] = [];
  total_listened: number[] = [];
  total_listenedgr: number[] = [];
  avg_max_listeners: number[] = [];
  avgData: number[] = [];
  newData: number[] = [];
  avgDatagr: number[] = [];
  newDatagr: number[] = [];
  avg_max_listenersgr: number[] = [];
  total_roomsWk1: number;
  total_roomsWk2: number;
  total_roomsWk3: number;
  total_roomsWk4: number;
  total_roomsWk5: number;

  total_roomsWk1gr: number;
  total_roomsWk2gr: number;
  total_roomsWk4gr: number;
  total_roomsWk3gr: number;
  total_roomsWk5gr: number;

  total_listenersData_1: number;
  total_listenersData_2: number;
  total_listenersData_3: number;
  total_listenersData_4: number;
  total_listenersData_5: number;

  total_listenersData_1gr: number;
  total_listenersData_2gr: number;
  total_listenersData_3gr: number;
  total_listenersData_4gr: number;
  total_listenersData_5gr: number;

  total_listened_1: number;
  total_listened_2: number;
  total_listened_3: number;
  total_listened_4: number;
  total_listened_5: number;

  total_listened_1gr: number;
  total_listened_2gr: number;
  total_listened_3gr: number;
  total_listened_4gr: number;
  total_listened_5gr: number;

  avg_max_listeners_1: number;
  avg_max_listeners_2: number;
  avg_max_listeners_3: number;
  avg_max_listeners_4: number;
  avg_max_listeners_5: number;

  avg_max_listeners_1gr: number;
  avg_max_listeners_2gr: number;
  avg_max_listeners_3gr: number;
  avg_max_listeners_4gr: number;
  avg_max_listeners_5gr: number;

  avg_1: number;
  avg_2: number;
  avg_3: number;
  avg_4: number;
  avg_5: number;

  avg_1gr: number;
  avg_2gr: number;
  avg_3gr: number;
  avg_4gr: number;
  avg_5gr: number;

  new_1: number;
  new_2: number;
  new_3: number;
  new_4: number;
  new_5: number;

  new_1gr: number;
  new_2gr: number;
  new_3gr: number;
  new_4gr: number;
  new_5gr: number;

  allmoderators: any[];
  public selectMonth: any = [
    { name: 'January', value: 1 },
    { name: 'February', value: 2 },
    { name: 'March', value: 3 },
    { name: 'April', value: 4 },
    { name: 'May', value: 5 },
    { name: 'June', value: 6 },
    { name: 'July', value: 7 },
    { name: 'August', value: 8 },
    { name: 'September', value: 9 },
    { name: 'October', value: 10 },
    { name: 'November', value: 11 },
    { name: 'December', value: 12 },
  ];

  public lineChartData: ChartDataSets[] = [
    { data: this.total_roomsData, label: 'Total Rooms' },
  ];
  public lineChartDatagr: ChartDataSets[] = [
    { data: this.total_roomsDatagr, label: 'Total Rooms' },
  ];
  public lineChartLabels: Label[] = [
    'Week 1',
    'Week 2',
    'Week 3',
    'Week 4',
    'Week 5',
  ];

  public lineChartData2: ChartDataSets[] = [
    { data: this.total_listenersData, label: 'Total Listeners' },
  ];
  public lineChartData2gr: ChartDataSets[] = [
    { data: this.total_listenersDatagr, label: 'Total Listeners' },
  ];

  public lineChartData3: ChartDataSets[] = [
    { data: this.total_listened, label: 'Total Listened Time' },
  ];
  public lineChartData3gr: ChartDataSets[] = [
    { data: this.total_listenedgr, label: 'Total Listened Time' },
  ];

  public lineChartData4: ChartDataSets[] = [
    { data: this.avg_max_listeners, label: 'Max Listeners' },
  ];
  public lineChartData4gr: ChartDataSets[] = [
    { data: this.avg_max_listenersgr, label: 'Max Listeners' },
  ];

  public lineChartData5: ChartDataSets[] = [
    { data: this.avgData, label: 'Avg Listened Time' },
  ];
  public lineChartData5gr: ChartDataSets[] = [
    { data: this.avgDatagr, label: 'Avg Listened Time' },
  ];

  public lineChartData6: ChartDataSets[] = [
    { data: this.newData, label: 'New Follower(s)' },
  ];
  public lineChartData6gr: ChartDataSets[] = [
    { data: this.newDatagr, label: 'New Follower(s)' },
  ];

  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      // grey
      backgroundColor: 'rgba(9, 175, 252, 0.2)',
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
      backgroundColor: 'rgba(20, 128, 0, 0.3)',
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
      // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
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
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'white',
      pointBorderColor: 'rgba(148,159,177,1)',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      pointBorderWidth: 3,
    },
  ];
  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];
  month1: any = '';
  month2: any = '';

  customPopoverOptions: any = {
    subHeader: ' Filter by',
  };

  customActionSheetOptions: any = {
    header: 'Select Month',
  };
  moderators: any;
  modLength: any;
  fullData: any = [];
  fullDatagr: any = [];
  thisDay: Date;
  durationDays: string;
  name: any;
  shownone = true;

  constructor(
    private router: Router,
    private app: AppService,
    private gr: GrServiceService,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {}

  async ngOnInit() {
    const user: any = await JSON.parse(localStorage.getItem('user'));
    const result = user.result;
    this.api_token = result.api_token;
    this.name = result.name;
    this.date = moment().format('YYYY-MM-DD');
    this.month = moment().format('MM');
    this.month1 = moment().format('MMMM');
    this.month2 = moment().format('MMMM');
    // alert(this.month1);
    // alert(this.month);
    this.getPerformanceStats();
    this.getGRPerformanceStats();
    this.getWeeklyStats(this.month);
    this.getWeeklyStatsgr(this.month);
    this.getWeeklyTopRooms();
    this.getWeeklyTopRoomsgr();
  }

  async doRefresh(ev) {
    await this.ngOnInit();
    ev.target.complete();
  }

  async getPerformanceStats() {
    // this.date = '2021-04-07';
    const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading',
    });
    await loading.present();
    this.app.performanceStats(this.api_token, this.date, this.page).subscribe(
      async (res: any) => {
        await loading.dismiss();
        // console.log(res);
        if (res.status === 'success') {
          // this.shownone = false;
          this.show = true;
          this.current = res.result.current;
          this.last = res.result.last;
          this.percTotal = this.relDiff(
            this.current.total_rooms,
            this.last.total_rooms
          );
          this.totalColor = this.getColor(this.percTotal);
          console.log(this.totalColor);
          this.total_listeners = this.relDiff(
            this.current.total_listeners,
            this.last.total_listeners
          );
          this.listenerColor = this.getColor(this.total_listeners);
          this.avg = this.relDiff(this.current.avg, this.last.avg);
          this.avgColor = this.getColor(this.avg);
          this.new = this.relDiff(this.current.new, this.last.new);
          this.newColor = this.getColor(this.new);
        } else if (res.status === 'upgrade') {
          const color = 'danger';
          this.presentToast(color, res.message);
          // this.shownone = true;
          this.show = false;
          // this.presentToast('danger',res.message);
          // this.alertService.danger(res.message);
          // this.router.navigateByUrl('/tabs/upgrade');
        } else if (res.status === 'validate') {
          // this.alertService.danger(res.message);
          const color = 'danger';
          this.presentToast(color, res.message);
          // this.router.navigateByUrl('/auth/validate/ ' + this.api_token);
          this.presentToast(color, res.message);
          //  this.shownone = true;
          this.show = false;
        } else {
          // this.alertService.danger(res.message);
          const color = 'danger';
          this.presentToast(color, res.message);
          // this.shownone = true;
          this.show = false;
        }
      },
      (err) => {
        this.presentToast('danger', err.message);
        // console.log(err);
      }
    );
  }

  async getGRPerformanceStats() {
    // this.date = '2021-04-07';
    this.gr.performanceStats(this.api_token, this.date, this.page).subscribe(
      async (res: any) => {
        // console.log(res);
        if (res.status === 'success') {
          // this.show = true;
          this.shownone = false;
          this.currentgr = res.result.current;
          this.lastgr = res.result.last;
          this.percTotalgr = this.relDiff(
            this.currentgr.total_rooms,
            this.lastgr.total_rooms
          );
          this.totalColorgr = this.getColor(this.percTotalgr);
          // console.log(this.totalColor);
          this.total_listenersgr = this.relDiff(
            this.currentgr.total_listeners,
            this.lastgr.total_listeners
          );
          this.listenerColorgr = this.getColor(this.total_listenersgr);
          this.avggr = this.relDiff(this.currentgr.avg, this.lastgr.avg);
          this.avgColorgr = this.getColor(this.avggr);
          this.newgr = this.relDiff(this.currentgr.new, this.lastgr.new);
          this.newColorgr = this.getColor(this.newgr);
        } else if (res.status === 'upgrade') {
          const color = 'danger';
          this.presentToast(color, res.message);
          // this.alertService.danger(res.message);
          // this.router.navigateByUrl('/tabs/upgrade');
          this.shownone = true;
        } else if (res.status === 'validate') {
          // this.alertService.danger(res.message);
          const color = 'danger';
          this.presentToast(color, res.message);
          // this.router.navigateByUrl('/auth/validate/ ' + this.api_token);
          this.shownone = true;
        } else {
          // this.alertService.danger(res.message);
          const color = 'danger';
          this.presentToast(color, res.message);
          this.shownone = true;
        }
      },
      (err) => {
        this.presentToast('danger', err.message);
        this.shownone = true;
        // console.log(err);
      }
    );
  }

  async getWeeklyStats(month) {
    //

    this.total_roomsData.length = 0;
    this.total_listenersData.length = 0;
    this.total_listened.length = 0;
    this.avgData.length = 0;
    this.avg_max_listeners.length = 0;
    this.newData.length = 0;
    this.app.weeklyStats(this.api_token, month, this.page).subscribe(
      async (res: any) => {
        // await loading.dismiss();
        // console.log(res);
        if (res.status === 'success') {
          // console.log(res);
          this.show = true;
          const sata = res.result;
          this.total_roomsWk1 = parseFloat(sata.week1.total_rooms);
          this.total_roomsWk2 = parseFloat(sata.week2.total_rooms);
          this.total_roomsWk3 = parseFloat(sata.week3.total_rooms);
          this.total_roomsWk4 = parseFloat(sata.week4.total_rooms);
          this.total_roomsWk5 = parseFloat(sata.week5.total_rooms) || 0;
          this.total_roomsData.push(
            this.total_roomsWk1,
            this.total_roomsWk2,
            this.total_roomsWk3,
            this.total_roomsWk4,
            this.total_roomsWk5
          );
          // console.log(this.total_roomsData);

          // total listeners
          this.total_listenersData_1 = parseFloat(sata.week1.total_listeners);
          this.total_listenersData_2 = parseFloat(sata.week2.total_listeners);
          this.total_listenersData_3 = parseFloat(sata.week3.total_listeners);
          this.total_listenersData_4 = parseFloat(sata.week4.total_listeners);
          this.total_listenersData_5 =
            parseFloat(sata.week5.total_listeners) || 0;

          this.total_listenersData.push(
            this.total_listenersData_1,
            this.total_listenersData_2,
            this.total_listenersData_3,
            this.total_listenersData_4,
            this.total_listenersData_5
          );
          // console.log(this.total_listenersData);

          // total_listened
          this.total_listened_1 = parseFloat(sata.week1.total_listened);
          this.total_listened_2 = parseFloat(sata.week2.total_listened);
          this.total_listened_3 = parseFloat(sata.week3.total_listened);
          this.total_listened_4 = parseFloat(sata.week4.total_listened);
          this.total_listened_5 = parseFloat(sata.week4.total_listened) || 0;

          this.total_listened.push(
            this.total_listened_1,
            this.total_listened_2,
            this.total_listened_3,
            this.total_listened_4,
            this.total_listened_5
          );
          // console.log(this.total_listened);

          // avg_max_listeners
          this.avg_max_listeners_1 = parseFloat(sata.week1.avg_max_listeners);
          this.avg_max_listeners_2 = parseFloat(sata.week2.avg_max_listeners);
          this.avg_max_listeners_3 = parseFloat(sata.week3.avg_max_listeners);
          this.avg_max_listeners_4 = parseFloat(sata.week4.avg_max_listeners);
          this.avg_max_listeners_5 =
            parseFloat(sata.week4.avg_max_listeners) || 0;

          this.avg_max_listeners.push(
            this.avg_max_listeners_1,
            this.avg_max_listeners_2,
            this.avg_max_listeners_3,
            this.avg_max_listeners_4,
            this.avg_max_listeners_5
          );
          // console.log(this.avg_max_listeners);

          // avgData
          this.avg_1 = parseFloat(sata.week1.avg);
          this.avg_2 = parseFloat(sata.week2.avg);
          this.avg_3 = parseFloat(sata.week3.avg);
          this.avg_4 = parseFloat(sata.week4.avg);
          this.avg_5 = parseFloat(sata.week4.avg) || 0;

          this.avgData.push(
            this.avg_1,
            this.avg_2,
            this.avg_3,
            this.avg_4,
            this.avg_5
          );
          // console.log(this.avgData);

          // newData
          this.new_1 = parseFloat(sata.week1.new) || 0;
          this.new_2 = parseFloat(sata.week2.new) || 0;
          this.new_3 = parseFloat(sata.week3.new) || 0;
          this.new_4 = parseFloat(sata.week4.new) || 0;
          this.new_5 = parseFloat(sata.week4.new) || 0;

          this.newData.push(
            this.new_1,
            this.new_2,
            this.new_3,
            this.new_4,
            this.new_5
          );
          // console.log(this.newData);
        } else if (res.status === 'upgrade') {
          const color = 'danger';
          this.presentToast(color, res.message);
          this.show = false;
          // this.alertService.danger(res.message);
          // this.router.navigateByUrl('/tabs/upgrade');
        } else if (res.status === 'validate') {
          // this.alertService.danger(res.message);
          const color = 'danger';
          this.show = false;
          this.presentToast(color, res.message);
          // this.router.navigateByUrl('/auth/validate/ ' + this.api_token);
        } else {
          // this.alertService.danger(res.message);
          this.show = false;
          const color = 'danger';
          this.presentToast(color, res.message);
          this.show = false;
        }
      },
      (err) => {
        this.presentToast('danger', err.message);
        this.show = false;
        // console.log(err);
      }
    );
  }

  async getWeeklyStatsgr(month) {
    this.total_roomsDatagr.length = 0;
    this.total_listenersDatagr.length = 0;
    this.total_listenedgr.length = 0;
    this.avgDatagr.length = 0;
    this.avg_max_listenersgr.length = 0;
    this.newDatagr.length = 0;
    this.gr.weeklyStats(this.api_token, month, this.page).subscribe(
      async (res: any) => {
        // await loading.dismiss();
        // console.log(res);
        if (res.status === 'success') {
          this.shownone = false;
          // console.log(res);
          const sata = res.result;
          this.total_roomsWk1gr = parseFloat(sata.week1.total_rooms);
          this.total_roomsWk2gr = parseFloat(sata.week2.total_rooms);
          this.total_roomsWk3gr = parseFloat(sata.week3.total_rooms);
          this.total_roomsWk4gr = parseFloat(sata.week4.total_rooms);
          this.total_roomsWk5gr = parseFloat(sata.week5.total_rooms) || 0;
          this.total_roomsDatagr.push(
            this.total_roomsWk1gr,
            this.total_roomsWk2gr,
            this.total_roomsWk3gr,
            this.total_roomsWk4gr,
            this.total_roomsWk5gr
          );
          // console.log(this.total_roomsData);

          // total listeners
          this.total_listenersData_1gr = parseFloat(sata.week1.total_listeners);
          this.total_listenersData_2gr = parseFloat(sata.week2.total_listeners);
          this.total_listenersData_3gr = parseFloat(sata.week3.total_listeners);
          this.total_listenersData_4gr = parseFloat(sata.week4.total_listeners);
          this.total_listenersData_5gr =
            parseFloat(sata.week5.total_listeners) || 0;

          this.total_listenersDatagr.push(
            this.total_listenersData_1gr,
            this.total_listenersData_2gr,
            this.total_listenersData_3gr,
            this.total_listenersData_4gr,
            this.total_listenersData_5gr
          );
          // console.log(this.total_listenersData);

          // total_listened
          this.total_listened_1gr = parseFloat(sata.week1.total_listened);
          this.total_listened_2gr = parseFloat(sata.week2.total_listened);
          this.total_listened_3gr = parseFloat(sata.week3.total_listened);
          this.total_listened_4gr = parseFloat(sata.week4.total_listened);
          this.total_listened_5gr = parseFloat(sata.week4.total_listened) || 0;

          this.total_listenedgr.push(
            this.total_listened_1gr,
            this.total_listened_2gr,
            this.total_listened_3gr,
            this.total_listened_4gr,
            this.total_listened_5gr
          );
          // console.log(this.total_listened);

          // avg_max_listeners
          this.avg_max_listeners_1gr = parseFloat(sata.week1.avg_max_listeners);
          this.avg_max_listeners_2gr = parseFloat(sata.week2.avg_max_listeners);
          this.avg_max_listeners_3gr = parseFloat(sata.week3.avg_max_listeners);
          this.avg_max_listeners_4gr = parseFloat(sata.week4.avg_max_listeners);
          this.avg_max_listeners_5gr =
            parseFloat(sata.week4.avg_max_listeners) || 0;

          this.avg_max_listenersgr.push(
            this.avg_max_listeners_1gr,
            this.avg_max_listeners_2gr,
            this.avg_max_listeners_3gr,
            this.avg_max_listeners_4gr,
            this.avg_max_listeners_5gr
          );
          // console.log(this.avg_max_listeners);

          // avgData
          this.avg_1gr = parseFloat(sata.week1.avg);
          this.avg_2gr = parseFloat(sata.week2.avg);
          this.avg_3gr = parseFloat(sata.week3.avg);
          this.avg_4gr = parseFloat(sata.week4.avg);
          this.avg_5gr = parseFloat(sata.week4.avg) || 0;

          this.avgDatagr.push(
            this.avg_1gr,
            this.avg_2gr,
            this.avg_3gr,
            this.avg_4gr,
            this.avg_5gr
          );
          // console.log(this.avgData);

          // newData
          this.new_1gr = parseFloat(sata.week1.new) || 0;
          this.new_2gr = parseFloat(sata.week2.new) || 0;
          this.new_3gr = parseFloat(sata.week3.new) || 0;
          this.new_4gr = parseFloat(sata.week4.new) || 0;
          this.new_5gr = parseFloat(sata.week4.new) || 0;

          this.newDatagr.push(
            this.new_1gr,
            this.new_2gr,
            this.new_3gr,
            this.new_4gr,
            this.new_5gr
          );
          // console.log(this.newData);
        } else if (res.status === 'upgrade') {
          const color = 'danger';
          this.presentToast(color, res.message);
          this.shownone = true;
          // this.alertService.danger(res.message);
          // this.router.navigateByUrl('/tabs/upgrade');
        } else if (res.status === 'validate') {
          // this.alertService.danger(res.message);
          const color = 'danger';
          this.presentToast(color, res.message);
          this.shownone = true;
          // this.router.navigateByUrl('/auth/validategr/ ' + this.api_token);
        } else {
          // this.alertService.danger(res.message);
          const color = 'danger';
          this.presentToast(color, res.message);
          this.shownone = true;
        }
      },
      (err) => {
        this.presentToast('danger', err.message);
        this.shownone = true;
        // console.log(err);
      }
    );
  }

  async getWeeklyTopRooms() {
    this.app
      .WeeklyTopRooms(this.api_token, this.date)
      .subscribe(async (res: any) => {
        if (res.status === 'success') {
          const arr = res.result;
          this.fullData = arr.slice(Math.max(arr.length - 3, 0));
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
          const arr = res.result;
          this.fullDatagr = arr.slice(Math.max(arr.length - 3, 0));
          //           date_ended: "2021-07-03 16:07:56"
          // date_started: "2021-07-03 10:11:01"
          // alert(this.thisDay);
        } else {
        }
      });
  }

  public randomize(): void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
  }

  onClick(channel) {
    this.router.navigateByUrl('/tabs/chtools/track/' + channel);
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

  changedData(event) {
    // console.log(this.selectedData);
    // console.log(event);
    this.showData = this.selectedData;
  }
  // transformMinute(value: number): string {
  //   const hours = Math.floor(value / 60);
  //   const minutes = Math.floor(value % 60);
  //   return hours + ':' + minutes;
  // }
  convert(value: number) {
    const data: any = moment.duration(value, 'minutes');
    // console.log(data._data);
    return data._data.minutes + ':' + data._data.seconds;
  }

  relDiff(a, b) {
    if (a == null) {
      a = 0;
    }
    if (b == null) {
      b = 0;
    }
    // if (a === null || b== null) {
    //   return '';
    // }
    let total;
    const decreaseValue = parseFloat(a) - parseFloat(b);
    if (b === 0) {
      total = 0;
    } else {
      total = ((decreaseValue / b) * 100).toFixed(2);
    }
    return total;
    // return  100 * Math.abs( (( a - b ) / (b)) * 100 ); Math.sign(2)
  }

  getColor(total) {
    //  console.log(Math.sign(parseFloat(total)));
    if (Math.sign(parseFloat(total)) === 1) {
      this.color = 'green';
      this.icon = 'arrow-up-outline';
    } else if (Math.sign(parseFloat(total)) === 0) {
      this.icon = '';
      this.color = 'black';
    } else {
      this.icon = 'arrow-down-outline';
      this.color = 'red';
    }
    return [this.color, this.icon];
  }

  segmentChanged(ev) {
    // console.log(ev);
  }

  gotoCHTOOLS() {
    this.router.navigateByUrl('/tabs/home');
  }
  onClick2(channel) {
    this.router.navigateByUrl('/tabs/grtools/track/' + channel);
  }

  async presentToast(color, message) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 1500,
    });
    toast.present();
  }

  async selectAMonth(ev: any) {
    const num = ev - 1;
    this.month1 = moment().month(num).format('MMMM');
    this.getWeeklyStats(ev);
  }

  async selectAMonthgr(ev: any) {
    const num = ev - 1;
    this.month2 = moment().month(num).format('MMMM');
    this.getWeeklyStatsgr(ev);
  }
}
