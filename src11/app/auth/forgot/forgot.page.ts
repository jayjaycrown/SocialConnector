import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  forgotForm: FormGroup;
  model: any = {};
  constructor(
    private auth: AuthService,
    private router: Router,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {}

  async onSubmit() {
    const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading',
    });
    await loading.present();
    const obj = {
      email: this.model.email,
    };
    // console.log(obj);
    this.auth.forgot(this.model.email).subscribe(async (res) => {
      await loading.dismiss();
      console.log(res);
      this.presentToast(res.message, 'primary');
      this.router.navigateByUrl('/auth/reset', {
        state: obj,
      });
      // this.router.navigateByUrl()
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
