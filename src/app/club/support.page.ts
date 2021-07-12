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
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {
  api_token: any;
  date: string;
  month: string;
  month1: string;
  clubData: any[];

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
    this.getMyClub();
  }

  async getMyClub() {
    const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading',
    });
    await loading.present();
    this.app.myClubs(this.api_token).subscribe(async (res: any) => {
      await loading.dismiss();
      console.log(res);
      if (res.status === 'success') {
        this.clubData = res.result;
      } else {
        console.log(res.status);
      }
    });
  }

  onClick(id) {
    this.router.navigateByUrl('tabs/club/club/' + id);
  }
}
