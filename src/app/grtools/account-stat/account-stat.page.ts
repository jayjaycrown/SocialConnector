/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  LoadingController,
  ToastController,
  AlertController,
} from '@ionic/angular';
import { GrServiceService } from 'src/app/_services/gr-service.service';
import { AppService } from '../../_services/app.service';

@Component({
  selector: 'app-account-stat',
  templateUrl: './account-stat.page.html',
  styleUrls: ['./account-stat.page.scss'],
})
export class AccountStatPage implements OnInit {
  api_token: any;
  results: any;
  key = 'date_entered';
  reverse = true;
  p = 1;
  constructor(
    private loadingController: LoadingController,
    private toastController: ToastController,
    private alertController: AlertController,
    private app: GrServiceService,
    private router: Router
  ) { }

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  async ngOnInit() {
    const user: any = await JSON.parse(localStorage.getItem('user'));
    const result = user.result;
    this.api_token = result.api_token;
    this.getUserStats();
  }

  async presentToast(color, message) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 3000,
    });
    toast.present();
  }
  async getUserStats() {
    const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading',
    });
    await loading.present();
    this.app.fetchAccountStats(this.api_token).subscribe(async (res: any) => {
      // console.log(res);
      await loading.dismiss();
      // console.log(res);
      if (res.status === 'success') {
        this.results = res.result;
        for (const i of this.results) {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          i.data;
        }
      } else if (res.status === 'upgrade') {
        const color = 'danger';
        this.presentToast(color, res.message);
        // this.alertService.danger(res.message);
        this.router.navigateByUrl('/home/upgrade');
      } else if (res.status === 'validate') {
        // this.alertService.danger(res.message);
        const color = 'danger';
        this.presentToast(color, res.message);
        this.router.navigateByUrl('/auth/validategr/ ' + this.api_token);
      } else {
        // this.alertService.danger(res.message);
        const color = 'danger';
        this.presentToast(color, res.message);
      }
    });
  }
}
