import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/_services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {
  state: any;
  model: any = {};
  showPass = false;
  constructor(
    private router: Router,
    private auth: AuthService,
    private location: Location,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    // this.router.getCurrentNavigation().extras.state;
    // console.log(history.state);
  }

  ngOnInit() {
    this.state = this.location.getState();
    console.log(this.state.email);
  }

  async onSubmit() {
    const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading',
    });
    await loading.present();
    const obj = {
      email: this.state.email,
      resetCode: this.model.resetCode,
      newPassword: this.model.newPassword,
    };
    console.log(obj);
    this.auth
      .reset(this.state.email, this.model.resetCode, this.model.newPassword)
      .subscribe(async (res: any) => {
        await loading.dismiss();
        console.log(res);
        if (res.status === 'success') {
          this.presentToast(res.message, 'primary');
          this.router.navigateByUrl('/auth');
        } else {
          this.presentToast(res.message, 'danger');
        }
      });
  }

  async presentToast(message, color) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 2000,
    });
    toast.present();
  }
}
