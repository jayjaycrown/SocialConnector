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
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  type = 'ch';
  type2 = 'ch';
  api_token: any;
  date: string;
  page = 1;
  month: any;
  current: any = {};
  last: any = {};
  color = '';
  icon = '';
  show: boolean;
  percTotal: string;
  total_listeners: string;
  avg: string;
  new: string;
  totalColor: string[];
  listenerColor: string[];
  avgColor: string[];
  newColor: string[];
  total_roomsData: number[] = [];
  total_listenersData: number[] = [];
  total_listened: number[] = [];
  avg_max_listeners: number[] = [];
  avgData: number[] = [];
  newData: number[] = [];
  total_roomsWk1: number;
  total_roomsWk2: number;
  total_roomsWk3: number;
  total_roomsWk4: number;

  total_listenersData_1: number;
  total_listenersData_2: number;
  total_listenersData_3: number;
  total_listenersData_4: number;

  total_listened_1: number;
  total_listened_2: number;
  total_listened_3: number;
  total_listened_4: number;

  avg_max_listeners_1: number;
  avg_max_listeners_2: number;
  avg_max_listeners_3: number;
  avg_max_listeners_4: number;

  avg_1: number;
  avg_2: number;
  avg_3: number;
  avg_4: number;

  new_1: number;
  new_2: number;
  new_3: number;
  new_4: number;

  public lineChartData: ChartDataSets[] = [
    { data: this.total_roomsData, label: 'No of Rooms' },
  ];
  public lineChartLabels: Label[] = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];

  public lineChartData2: ChartDataSets[] = [
    { data: this.total_listenersData, label: 'Total Listeners' },
  ];

  public lineChartData3: ChartDataSets[] = [
    { data: this.total_listened, label: 'Total Listened Time' },
  ];

  public lineChartData4: ChartDataSets[] = [
    { data: this.avg_max_listeners, label: 'Avg max Listeners' },
  ];

  public lineChartData5: ChartDataSets[] = [
    { data: this.avgData, label: 'Average Listened Time' },
  ];

  public lineChartData6: ChartDataSets[] = [
    { data: this.newData, label: 'Daily New Followers' },
  ];

  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
  ];
  public lineChartColors2: Color[] = [
    {
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
  ];
  public lineChartColors3: Color[] = [
    {
      // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)',
    },
  ];
  public lineChartColors4: Color[] = [
    {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(
    private router: Router,
    private app: AppService,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {}

  async ngOnInit() {
    const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading',
    });
    await loading.present();
    this.show = false;
    this.getPerformanceStats();
    this.getWeeklyStats();
    await loading.dismiss();
  }

  async ionViewWillEnter() {
    const user: any = await JSON.parse(localStorage.getItem('user'));
    const result = user.result;
    this.api_token = result.api_token;
    this.date = moment().format('YYYY-MM-DD');
    this.month = moment().format('MM');
    // alert(this.month);
    this.getPerformanceStats();
    this.getWeeklyStats();
  }

  async getPerformanceStats() {
    // this.date = '2021-04-07';
    this.app.performanceStats(this.api_token, this.date, this.page).subscribe(
      async (res: any) => {
        // console.log(res);
        if (res.status === 'success') {
          this.show = true;
          this.current = res.result.current;
          this.last = res.result.last;
          this.percTotal = this.relDiff(
            this.current.total_rooms,
            this.last.total_rooms
          );
          this.totalColor = this.getColor(this.percTotal);
          // console.log(this.totalColor);
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
          // this.alertService.danger(res.message);
          this.router.navigateByUrl('/tabs/upgrade');
        } else if (res.status === 'validate') {
          // this.alertService.danger(res.message);
          const color = 'danger';
          this.presentToast(color, res.message);
          this.router.navigateByUrl('/auth/validate/ ' + this.api_token);
        } else {
          // this.alertService.danger(res.message);
          const color = 'danger';
          this.presentToast(color, res.message);
        }
      },
      (err) => {
        this.presentToast('danger', err.message);
        // console.log(err);
      }
    );
  }

  async getWeeklyStats() {
    // this.date = '2021-04-07';
    this.app.weeklyStats(this.api_token, this.month, this.page).subscribe(
      async (res: any) => {
        // console.log(res);
        if (res.status === 'success') {
          // console.log(res);
          const sata = res.result;
          this.total_roomsWk1 = parseFloat(sata.week1.total_rooms);
          this.total_roomsWk2 = parseFloat(sata.week2.total_rooms);
          this.total_roomsWk3 = parseFloat(sata.week3.total_rooms);
          this.total_roomsWk4 = parseFloat(sata.week4.total_rooms);
          this.total_roomsData.length = 0;
          this.total_roomsData.push(
            this.total_roomsWk1,
            this.total_roomsWk2,
            this.total_roomsWk3,
            this.total_roomsWk4
          );
          console.log(this.total_roomsData);

          // total listeners
          this.total_listenersData_1 = parseFloat(sata.week1.total_listeners);
          this.total_listenersData_2 = parseFloat(sata.week2.total_listeners);
          this.total_listenersData_3 = parseFloat(sata.week3.total_listeners);
          this.total_listenersData_4 = parseFloat(sata.week4.total_listeners);
          this.total_listenersData.length = 0;
          this.total_listenersData.push(
            this.total_listenersData_1,
            this.total_listenersData_2,
            this.total_listenersData_3,
            this.total_listenersData_4
          );
          console.log(this.total_listenersData);

          // total_listened
          this.total_listened_1 = parseFloat(sata.week1.total_listeners);
          this.total_listened_2 = parseFloat(sata.week2.total_listeners);
          this.total_listened_3 = parseFloat(sata.week3.total_listeners);
          this.total_listened_4 = parseFloat(sata.week4.total_listeners);
          this.total_listened.length = 0;
          this.total_listened.push(
            this.total_listened_1,
            this.total_listened_2,
            this.total_listened_3,
            this.total_listened_4
          );
          console.log(this.total_listened);
        } else if (res.status === 'upgrade') {
          const color = 'danger';
          this.presentToast(color, res.message);
          // this.alertService.danger(res.message);
          this.router.navigateByUrl('/tabs/upgrade');
        } else if (res.status === 'validate') {
          // this.alertService.danger(res.message);
          const color = 'danger';
          this.presentToast(color, res.message);
          this.router.navigateByUrl('/auth/validate/ ' + this.api_token);
        } else {
          // this.alertService.danger(res.message);
          const color = 'danger';
          this.presentToast(color, res.message);
        }
      },
      (err) => {
        this.presentToast('danger', err.message);
        // console.log(err);
      }
    );
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

  segmentChanged(ev) {}

  gotoCHTOOLS() {
    this.router.navigateByUrl('/tabs/home');
  }

  async presentToast(color, message) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 1500,
    });
    toast.present();
  }
}
