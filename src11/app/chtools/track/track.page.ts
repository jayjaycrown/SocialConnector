/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AlertController,
  LoadingController,
  ToastController,
} from '@ionic/angular';
import { AppService } from '../../_services/app.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-track',
  templateUrl: './track.page.html',
  styleUrls: ['./track.page.scss'],
})
export class TrackPage implements OnInit {
  @ViewChild('trackForm') slForm: NgForm;
  // tslint:disable-next-line: variable-name
  api_token: any;
  page = 1;
  allRooms: any;
  model: any = {};
  submitted: boolean;
  // trackForm: NgForm;
  constructor(
    private loadingController: LoadingController,
    private toastController: ToastController,
    private alertController: AlertController,
    private app: AppService,
    private router: Router
  ) {}

  async ngOnInit() {
    // localStorage.removeItem('refresh');
    const d = localStorage.getItem('refresh');
    if (d !== null) {
      localStorage.removeItem('refresh');
      // tslint:disable-next-line: only-arrow-functions
      // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
    // alert(d);
    //
    const user: any = await JSON.parse(localStorage.getItem('user'));
    const result = user.result;
    this.api_token = result.api_token;
    this.getRoomHistory();
  }

  async presentToast(color, message) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 3000,
    });
    toast.present();
  }

  async getRoomHistory() {
    const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading',
    });
    await loading.present();
    this.app.getActiveRooms(this.page, this.api_token).subscribe(
      async (res: any) => {
        await loading.dismiss();
        // console.log(res);
        if (res.status === 'success') {
          this.allRooms = res.result;
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
        console.error(err);
      }
    );
  }

  analyze(roomId) {
    // alert(roomId);
    this.router.navigateByUrl('/tabs/chtools/track/' + roomId);
  }

  onSubmit() {
    // console.log(this.model);
    const str = this.model.roomLink;
    const splitted = str.split('/');
    // console.log(splitted[4]);
    const data = splitted[4];
    this.analyze(data);
    // this.trackForm.reset();
    this.submitted = true;
    this.slForm.reset();
  }

  next(fastForward) {
    if (fastForward === 'forward') {
      this.page += 1;
      this.getRoomHistory();
    } else {
      if (this.page > 1) {
        this.page -= 1;
        this.getRoomHistory();
      } else {
        this.page = 1;
      }
    }
    // alert(this.page);
  }
}
