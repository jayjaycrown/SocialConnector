import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { first } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';
import { ReCaptcha2Component } from 'ngx-captcha';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  @ViewChild('captchaElem') captchaElem: ReCaptcha2Component;
  @ViewChild('langInput') langInput: ElementRef;

  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;

  public theme: 'light' | 'dark' = 'light';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'en';
  public type: 'image' | 'audio';

  loginForm: any;
  model: any = {};
  error: any;
  showPass = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {
    if (this.authenticationService.userValue) {
      this.router.navigate(['/tabs']);
    }
  }

  ngOnInit() {}

  async presentToast(color, message) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 1000,
    });
    toast.present();
  }
  async onSubmit() {
    // console.log(this.model);
    const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading',
    });
    await loading.present();
    // this.loading = true;
    this.authenticationService
      .login(this.model.email, this.model.password, this.model.gresponse)
      .pipe(first())
      .subscribe(
        async (res: any) => {
          await loading.dismiss();
          if (res.status === 'success') {
            const color = 'success';
            this.presentToast(color, res.message);
            // const api_token = res.result.api_token;
            const returnUrl =
              this.route.snapshot.queryParams.returnUrl || '/tabs';
            this.router.navigateByUrl(returnUrl);
          } else {
            const color = 'danger';
            this.presentToast(color, res.message);
            this.error = res.message;
            // this.loading = false;
          }
        },
        async (err) => {
          await loading.dismiss();
          this.error = err;
        }
      );
  }

  handleSuccess(event) {
    // console.log('e', event);
  }
}
