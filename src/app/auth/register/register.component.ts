import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/_services/auth.service';
import { ReCaptcha2Component } from 'ngx-captcha';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
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

  registerForm;
  model: any = {};
  error: any;
  showPass = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async presentToast(color, message) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 3000,
    });
    toast.present();
  }
  async onSubmit() {
    console.log(this.model);
    const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading',
    });
    await loading.present();
    this.authenticationService
      .register(this.model.email, this.model.password, this.model.name, this.model.gresponse)
      .pipe(first())
      .subscribe(
        async (res: any) => {
          await loading.dismiss();
          // console.log(res);
          if (res.status === 'success') {
            const color = 'success';
            this.presentToast(color, res.message);
            // eslint-disable-next-line @typescript-eslint/naming-convention
            // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/app/home';
            this.router.navigateByUrl('/home');
          } else {
            // this.alertService.danger(res.message);
            const color = 'danger';
            this.presentToast(color, res.message);
            this.error = res.message;
            // this.loading = false;
          }
        },
        (err) => {
          this.error = err;
          console.log(err);
        }
      );
  }
  handleSuccess(event) {
    console.log('e', event);
  }
}
