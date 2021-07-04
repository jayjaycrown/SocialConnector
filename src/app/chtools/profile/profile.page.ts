/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { AppService } from '../../_services/app.service';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  // tslint:disable-next-line: variable-name
  api_token: any;
  result: any = {};
  data: any = {};
  date2: string;
  // tslint:disable-next-line: variable-name
  subscription_expiry: any;
  upgrade = false;
  freeTrial = false;
  constructor(
    private admin: AuthService,
    private router: Router,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) { }

  async ngOnInit() {
    const user: any = await JSON.parse(localStorage.getItem('user'));
    const result = user.result;
    this.api_token = result.api_token;
    this.date2 = moment().format('YYYY-MM-DD');
    this.getDetails();
  }

  getDetails() {
    this.admin.getDetails(this.api_token).subscribe((res: any) => {
      if (res.status === 'success') {
        this.result = res.result;
        // this.data = JSON.parse(this.result.data);
        if (this.result.subscription_expiry === null) {
          this.freeTrial = true;
          this.upgrade = true;
        } else if (this.result.subscription_expiry < this.date2) {
          this.upgrade = true;
          this.freeTrial = false;
        } else {
          this.upgrade = false;
          this.freeTrial = false;
        }
        if (res.status === 'validate') {
          const color = 'danger';
          this.presentToast(color, res.message);
          // this.alertService.danger(res.message);
          this.router.navigateByUrl('/auth/validate/ ' + this.api_token);
        } else {
        }
      } else {
        const color = 'danger';
        this.presentToast(color, res.message);
        // this.alertService.danger(res.message);
      }
      // console.log(res);

      // console.log(this.data);
    }, err => {
      const color = 'danger';
      this.presentToast(color, err.message);
      // this.alertService.danger(err.message);
    });
  }

  async presentToast(color, message) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 3000
    });
    toast.present();
  }

  async freetrial() {
    const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading'
    });
    await loading.present();
    this.admin.freeTrial(this.api_token).subscribe(async (res: any) => {
      await loading.dismiss();
      const color = 'primary';
      this.presentToast(color, res.message);
    });
  }
}
