import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss'],
})
export class ValidateComponent implements OnInit {

  validateForm;
  model: any = {};
  // tslint:disable-next-line: variable-name
  ch_token: string;
  // tslint:disable-next-line: variable-name
  api_token: string;
  error: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) { }

  async ngOnInit() {
    const data = await localStorage.getItem('ch_token');
    this.ch_token = data;
		// alert(this.ch_token);
		  this.api_token = this.route.snapshot.paramMap.get('id');
  }

  async presentToast(color, message) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 2000
    });
    toast.present();
  }

  async onSubmit() {
    const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading'
      });
    await loading.present();
    this.authenticationService
			.validate(this.api_token, this.model.ch_username)
			.pipe(first())
			.subscribe(
        async (res: any) => {
          await loading.dismiss();
					// console.log(res);
          if (res.status === 'success') {
            const color = 'success';
            this.presentToast(color, res.message);
						      this.authenticationService
							.getDetails(this.api_token)
							// tslint:disable-next-line: no-shadowed-variable
							.subscribe((res: any) => {
								// console.log(res);
								// const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/app/home';
								this.router.navigateByUrl('/home');
							});
					} else {
						// this.alertService.danger(res.message);
            this.error = res.message;
            const color = 'danger';
            this.presentToast(color, res.message);
						// this.loading = false;
					}
				},
				(err) => {
					this.error = err;
					// this.loading = false;
				}
			);
  }

  logOut() {
    // alert(1);
    this.authenticationService.logout();
  }
}
