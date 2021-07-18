/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { AppService } from 'src/app/_services/app.service';

@Component({
  selector: 'app-superfans',
  templateUrl: './superfans.page.html',
  styleUrls: ['./superfans.page.scss'],
})
export class SuperfansPage implements OnInit {
  api_token: any;
  ch_user_id: any;
  ch_user_email: any;
  greenroom_user_id: any;
  rally_user_id: any;
  date: string;
  results: any = [];
  data: any[];

  constructor(
    private app: AppService,
    private router: Router,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {}

  async ngOnInit() {
    const user: any = await JSON.parse(localStorage.getItem('user'));
    const result = user.result;
    this.api_token = result.api_token;

    this.date = moment().format('YYYY-MM-DD');
    this.getSuperFans();
  }

  async getSuperFans() {
    const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading',
    });
    await loading.present();
    this.app
      .getSuperfans(this.api_token, this.date)
      .subscribe(async (res: any) => {
        console.log(res);
        await loading.dismiss();
        this.results = JSON.stringify(this.results);
        console.log(this.results);
        // for (const iterator of this.results) {
        //   const element = this.results[iterator];
        //   this.data = [];
        //   this.data.push(element);
        // }

        // const array: any[] = this.results;
        // for (const key in this.results) {
        //   if (Object.prototype.hasOwnProperty.call(this.results, key)) {
        //     const element = this.results[key];
        //     this.data = [];
        //     this.data.push(element);
        //   }
        // }
        // console.log(this.data);
        // console.log(this.results.length);
      });
  }
}
