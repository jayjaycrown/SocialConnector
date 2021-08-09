/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  LoadingController,
  ToastController,
  AlertController,
} from '@ionic/angular';
import { AppService } from '../../_services/app.service';

@Component({
  selector: 'app-club-analytics',
  templateUrl: './club-analytics.page.html',
  styleUrls: ['./club-analytics.page.scss'],
})
export class ClubAnalyticsPage implements OnInit {
  model: any = {};
  allRooms: any = [];
  moderators: any = {};
  roomId: any;
  // tslint:disable-next-line: variable-name
  api_token: any;
  page = 1;
  constructor(
    private app: AppService,
    private router: Router,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private alertController: AlertController
  ) {}

  async ngOnInit() {
    const user: any = await JSON.parse(localStorage.getItem('user'));
    const result = user.result;
    this.api_token = result.api_token;
  }

  // tslint:disable-next-line: variable-name
  analyze(club_id) {
    // alert(roomId);
    this.router.navigateByUrl('/home/club-analytics/' + club_id);
  }
  async presentToast(color, message) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 3000,
    });
    toast.present();
  }
  async onSubmit() {
    // console.log(this.model);
    const str = this.model.club;
    const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading',
    });
    await loading.present();
    this.app.searchClub(this.api_token, str).subscribe(async (res: any) => {
      await loading.dismiss();
      if (res.status === 'success') {
        this.allRooms = res.result;
      } else if (res.status === 'upgrade') {
        const color = 'danger';
        this.presentToast(color, res.message);
        // this.alertService.danger(res.message);
        this.router.navigateByUrl('/tabs/upgrade');
      } else {
        // this.alertService.danger(res.message)
        const color = 'danger';
        this.presentToast(color, res.message);
      }
      // console.log(res);
      // this.allRooms = res.result;
    });
  }

  // tslint:disable-next-line: variable-name
  claimRoom(club_id) {
    this.router.navigateByUrl('/tabs/chtools/verify-club/' + club_id);
  }

  // tslint:disable-next-line: variable-name
  redirect(club_id) {
    const url = 'https://members.trackmy.club/';
    window.open(url + club_id, '_blank');
    // window.location.href()
  }
}
