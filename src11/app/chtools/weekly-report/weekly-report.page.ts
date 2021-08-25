/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  LoadingController,
  ToastController,
  AlertController, Platform
} from '@ionic/angular';
import * as moment from 'moment';
import { AppService } from '../../_services/app.service';
import { format } from 'date-fns';
import { File } from '@ionic-native/file/ngx';
import { Papa } from 'ngx-papaparse';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-weekly-report',
  templateUrl: './weekly-report.page.html',
  styleUrls: ['./weekly-report.page.scss'],
})
export class WeeklyReportPage implements OnInit {
  setDisplay: boolean;
  // tslint:disable-next-line: variable-name
  avg_max_listeners: any;
  model: any = {};
  allRooms: any = [];
  moderators: any = {};
  roomId: any;
  // tslint:disable-next-line: variable-name
  api_token: any;
  page = 1;
  date: any;
  roomDetail: any = {};
  	exportedData: any = [];
  constructor(
    private app: AppService,
    private router: Router,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private alertController: AlertController,
     private file: File,
    private socialSharing: SocialSharing,
    private papa: Papa,
    private plt: Platform
  ) {}

  async ngOnInit() {
    const user: any = await JSON.parse(localStorage.getItem('user'));
    const result = user.result;
    this.api_token = result.api_token;
    // const date1 = new Date();
    // const date = new Date(date1.toUTCString());
    this.date = moment().format('YYYY-MM-DD');
    this.weeklyRoomHistory();
  }

  async presentToast(color, message) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 3000,
    });
    toast.present();
  }

  async weeklyRoomHistory() {
    this.exportedData = [];
    const date: Date = this.date;
    const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading',
    });
    await loading.present();
    this.app
      .weeklyRoomHistory(this.api_token, this.page, this.date)
      .subscribe(async (res: any) => {
        // console.log(res);
        await loading.dismiss();
        if (res.status === 'success') {
          this.roomDetail = res.result;
          this.avg_max_listeners = this.roomDetail.avg_max_listeners;
          this.allRooms = res.result.rooms;
          this.exportedData = [
					{
						avg_max_listeners: this.roomDetail.avg_max_listeners,
						total_listeners: this.roomDetail.total_listeners,
						total_listened: this.roomDetail.total_listened,
						avg: this.roomDetail.avg,
						new : this.roomDetail.new,
						total_rooms: this.roomDetail.total_rooms,
						date
					}
				];
        } else if (res.status === 'upgrade') {
          const color = 'danger';
          this.presentToast(color, res.message);
          // this.alertService.danger(res.message);
          this.router.navigateByUrl('/home/upgrade');
        } else if (res.status === 'validate') {
          const color = 'danger';
          this.presentToast(color, res.message);
          // this.alertService.danger(res.message);
          this.router.navigateByUrl('/auth/validate/ ' + this.api_token);
        } else {
          // this.alertService.danger(res.message);
        }

        // console.log(this.allRooms);
      });
  }
  analyze(roomId) {
    // alert(roomId);
    this.router.navigateByUrl('/tabs/chtools/track/' + roomId);
  }

  async onSubmit() {
    this.exportedData = [];

    // // console.log(this.model);
    // const date = this.model.date;
    const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading',
    });
    await loading.present();
    let date = this.model.date;
    date = format(new Date(date), 'yyyy-MM-dd');
    //  console.log(date);
    this.app
      .weeklyRoomHistory(this.api_token, this.page, date)
      .subscribe(async (res: any) => {
        await loading.dismiss();
        // console.log(res);
        if (res.status === 'success') {
          this.roomDetail = res.result;
          // console.log( this.roomDetail);
          this.avg_max_listeners = this.roomDetail.avg_max_listeners;
          this.allRooms = res.result.rooms;
          this.exportedData = [
					{
						avg_max_listeners: this.roomDetail.avg_max_listeners,
						total_listeners: this.roomDetail.total_listeners,
						total_listened: this.roomDetail.total_listened,
						avg: this.roomDetail.avg,
						new : this.roomDetail.new,
						total_rooms: this.roomDetail.total_rooms,
						date
					}
				];
        } else if (res.status === 'upgrade') {
          const color = 'danger';
          this.presentToast(color, res.message);
          // this.alertService.danger(res.message);
          this.router.navigateByUrl('/tabs/upgrade');
        } else if (res.status === 'validate') {
          const color = 'danger';
          this.presentToast(color, res.message);
          // this.alertService.danger(res.message);
          this.router.navigateByUrl('/auth/validate/ ' + this.api_token);
        } else {
          // this.alertService.danger(res.message);
          const color = 'warning';
          this.presentToast(color, res.message);
        }

        // console.log(this.allRooms);
      });
  }

  next(fastForward) {
    if (fastForward === 'forward') {
      this.page += 1;
      this.weeklyRoomHistory();
    } else {
      if (this.page > 1) {
        this.page -= 1;
        this.weeklyRoomHistory();
      } else {
        this.page = 1;
      }
    }
  }

  transformMinute(value: number): string {
    const hours = Math.floor(value / 60);
    const minutes = Math.floor(value % 60);
    return hours + ' hrs ' + minutes + ' mins';
  }

  export() {
    const header = [];
    const data = this.exportedData[0];
    for (const property in data) {
      if ( ! data.hasOwnProperty(property)) {
          continue;
      }
      header.push(property);
    }

    const csv = this.papa.unparse({
      fields: header,
      data: this.exportedData
    });
    console.log(csv);
    if (this.plt.is('capacitor') || this.plt.is('cordova')) {
      this.file.writeFile(this.file.dataDirectory, 'weekly_report.csv', csv, { replace: true })
        .then(res => {
          this.socialSharing.share(null, null, res.nativeURL, null);
        }).catch();
    } else {
      const blob = new Blob([csv]);
      const a = window.document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = 'weekly_report.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    // console.log(this.newTop)

	}
}
