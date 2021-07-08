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
  selectedData = 'total_rooms';
  showData = 'total_rooms';
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

  public lineChartData: ChartDataSets[] = [{ data: this.total_roomsData }];
  public lineChartLabels: Label[] = [
    'Week 1',
    'Week 2',
    'Week 3',
    'Week 4',
    'Week 5',
  ];

  public lineChartData2: ChartDataSets[] = [{ data: this.total_listenersData }];

  public lineChartData3: ChartDataSets[] = [{ data: this.total_listened }];

  public lineChartData4: ChartDataSets[] = [{ data: this.avg_max_listeners }];

  public lineChartData5: ChartDataSets[] = [{ data: this.avgData }];

  public lineChartData6: ChartDataSets[] = [{ data: this.newData }];

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
  month1: any = '';
  total_roomsWk5: number;
  total_listenersData_5: number;
  total_listened_5: number;
  avg_max_listeners_5: number;
  avg_5: number;
  new_5: number;
  customPopoverOptions: any = {
    subHeader: ' Filter by',
  };

  customActionSheetOptions: any = {
    header: 'Select Month',
  };

  constructor(
    private router: Router,
    private app: AppService,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {}

  async ngOnInit() {
    const user: any = await JSON.parse(localStorage.getItem('user'));
    const result = user.result;
    this.api_token = result.api_token;
    this.date = moment().format('YYYY-MM-DD');
    this.month = moment().format('MM');
    this.month1 = moment().format('MMMM');
    // alert(this.month1);
    // alert(this.month);
    this.getPerformanceStats();
    this.getWeeklyStats(this.month);
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

  async getWeeklyStats(month) {
    const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading',
    });
    await loading.present();
    this.total_roomsData.length = 0;
    this.total_listenersData.length = 0;
    this.total_listened.length = 0;
    this.avgData.length = 0;
    this.avg_max_listeners.length = 0;
    this.newData.length = 0;
    this.app.weeklyStats(this.api_token, month, this.page).subscribe(
      async (res: any) => {
        await loading.dismiss();
        console.log(res);
        if (res.status === 'success') {
          // console.log(res);
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
          console.log(this.total_roomsData);

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
          console.log(this.total_listenersData);

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
          console.log(this.total_listened);

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
          console.log(this.avg_max_listeners);

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
          console.log(this.avgData);

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
          console.log(this.newData);
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

  changedData(event) {
    console.log(this.selectedData);
    console.log(event);
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

  async selectAMonth(ev: any) {
    const num = ev - 1;
    this.month1 = moment().month(num).format('MMMM');
    this.getWeeklyStats(ev);
  }
}
