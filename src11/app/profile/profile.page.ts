import { Router } from '@angular/router';
/* eslint-disable @typescript-eslint/naming-convention */
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  api_token: any;
  ch_user_id: any;
  greenroom_user_id: any;
  showLinkCh = false;
  showLinkGr = false;
  rally_user_id: any;
  showLinkRally: boolean;
  ch_user_email: any;
  result: any = {};
  data: any = {};
  date2: string;
  // tslint:disable-next-line: variable-name
  subscription_expiry: any;
  upgrade = false;
  freeTrial = false;

  constructor(
    private auth: AuthService,
    private router: Router,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) { }

  async ionViewWillEnter(){
    const user: any = await JSON.parse(localStorage.getItem('user'));
    const result = user.result;
    this.api_token = result.api_token;
    this.ch_user_id = result.ch_user_id;
    this.ch_user_email = result.email;
    this.greenroom_user_id = result.greenroom_user_id;
    this.rally_user_id = result.rally_user_id;

    if (this.ch_user_id == null || this.ch_user_id === '') {
      this.showLinkCh = true;
    } else{
      this.showLinkCh = false;
    }

    if (this.greenroom_user_id == null || this.greenroom_user_id === '') {
      this.showLinkGr = true;
    }else{
      this.showLinkGr = false;
    }

    if (this.rally_user_id == null || this.rally_user_id === '') {
      this.showLinkRally = true;
    }else{
      this.showLinkRally = false;
    }

    this.date2 = moment().format('YYYY-MM-DD');
    this.getDetails();
  }

  ngOnInit() {
  }

  getDetails() {
    this.auth.getDetails(this.api_token).subscribe((res: any) => {
      // console.log(res);
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
      } else if (res.status === 'validate') {
        const color = 'danger';
        this.presentToast(color, res.message);
        // this.alertService.danger(res.message);
        this.router.navigateByUrl('/auth/validate/ ' + this.api_token);
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

  async freetrial() {
    const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading'
    });
    await loading.present();
    this.auth.freeTrial(this.api_token).subscribe(async (res: any) => {
      await loading.dismiss();
      const color = 'primary';
      this.presentToast(color, res.message);
    });
  }


  async presentToast(color, message) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 1000
    });
    toast.present();
  }

  onClick() {
    this.auth.logout();
  }

  linkCH(){
    this.router.navigateByUrl('/auth/validate/' + this.api_token);
  }

  linkGR(){
    this.router.navigateByUrl('/auth/validategr/' + this.api_token);
  }

  linkRally(){
		console.log(`https://garyvip.managemych.club/link_rally?ch_user_id=${this.ch_user_id}&email=${this.ch_user_email}`);
		window.open(`https://garyvip.managemych.club/link_rally?ch_user_id=${this.ch_user_id}&email=${this.ch_user_email}`);
  }

}
