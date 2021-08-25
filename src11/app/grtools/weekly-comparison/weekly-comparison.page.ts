/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
import * as moment from 'moment';
import { AppService } from '../../_services/app.service';
import {format} from 'date-fns';
import { GrServiceService } from 'src/app/_services/gr-service.service';

@Component({
  selector: 'app-weekly-comparison',
  templateUrl: './weekly-comparison.page.html',
  styleUrls: ['./weekly-comparison.page.scss'],
})
export class WeeklyComparisonPage implements OnInit {

  model: any = {};
	// tslint:disable-next-line: variable-name
	api_token: any;
	allRooms: any = [];
  allRooms2: any = [];
  dates;
	page = 1;
	date: string;

	error: any;
	status = false;

	date2: string;
	date3: string;
	week1Details: any;
	week2Details: any;
  date1: string;
  constructor(
    private app: GrServiceService,
    private router: Router,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) { }

  async ngOnInit() {
    const user: any = await JSON.parse(localStorage.getItem('user'));
		  const result = user.result;
    this.api_token = result.api_token;
    this.date2 = moment().format('YYYY-MM-DD');
  }

  transformMinute(value: number): string {
    const hours = Math.floor(value / 60);
    const minutes = Math.floor(value % 60);
    return hours + ' hrs ' + minutes + ' mins';
  }

  async presentToast(color, message) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 2000
    });
    toast.present();
  }

  async compare() {
    // console.log(this.model);
    const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading'
      });
    await loading.present();
    const date = this.model.date1;
    this.date1 =  format(new Date(date), 'yyyy-MM-dd');
    this.date = this.date1;
    const date2 = this.model.date2;
    this.date2 = format(new Date(date2), 'yyyy-MM-dd');
    this.date3 = this.date2;
    // console.log( this.date1, this.date2);
		// this.date1 = this.model.date1;
		  // this.date2 = this.model.date2;
    // this.date3 = this.date2;
    const color = 'danger';
		// console.log('date1 ', this.date, '  date2 ', this.date2);
		  this.app.CompareWeek(this.api_token, this.date1, this.date2, this.page)
        .subscribe(async (res: any) => {
        await loading.dismiss();
				    if (res.status === 'success') {
					this.status = true;
					this.week1Details = res.result.week1;
					this.week2Details = res.result.week2;
					// console.log(this.week2Details);
				} else if (res.status === 'upgrade') {
        // this.alertService.danger(res.message);
          this.presentToast(color, res.message);
				      this.router.navigateByUrl('/home/upgrade');
			} else if (res.status === 'validate') {
        // this.alertService.danger(res.message);
          this.presentToast(color, res.message);
				      this.router.navigateByUrl('/auth/validategr/ ' + this.api_token);
			}	else {
					this.status = false;
					this.error = res.message;
          // this.alertService.danger(res.message);
     this.presentToast(color, res.message);
					// console.log(this.error);
				}
			});
	}

	next(fastForward) {
		if (fastForward === 'forward') {
			this.page += 1;
			this.compare();
		} else {
			if (this.page > 1) {
				this.page -= 1;
				this.compare();
			} else {
				this.page = 1;
			}
		}
	}

}
