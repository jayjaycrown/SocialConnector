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
  key = '';
  reverse = true;
  p = 1;

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
    this.results = [];
    const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading',
    });
    await loading.present();
    this.app
      .getSuperfans(this.api_token, this.date)
      .subscribe(async (res: any) => {
        console.log(res);
        for (const key in res.result) {
          if (Object.prototype.hasOwnProperty.call(res.result, key)) {
            const element = res.result[key];
            // console.log(element);
            this.results.push(element);
          }
        }
        await loading.dismiss();
        console.log(this.results);
      });
  }
}
