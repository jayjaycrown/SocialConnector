/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { AppService } from '../../../_services/app.service';


@Component({
  selector: 'app-verify-club',
  templateUrl: './verify-club.component.html',
  styleUrls: ['./verify-club.component.scss'],
})
export class VerifyClubComponent implements OnInit {
	id: string;
	// tslint:disable-next-line: variable-name
	api_token: any;
	loading = false;
	code: any;
  constructor(
    private app: AppService,
		  private router: Router,
    private route: ActivatedRoute,
    private toastController: ToastController,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {
    	this.route.paramMap.subscribe(paramMap => {
			this.id = paramMap.get('id');
		});
  }

  async ngOnInit() {
    	const user: any = await JSON.parse(localStorage.getItem('user'));
		   const result = user.result;
		   this.api_token = result.api_token;
		   this.getCode();
  }

  getCode() {
		// this.loading = true;
		this.app.getCode(this.api_token, this.id).subscribe((res: any) => {
			// console.log(res);
			if (res.status === 'success') {
				this.code = res.result.code;
			} else {
				// this.alertService.danger(res.message);
			}
		});
  }

  async verifyClub() {
    // this.loading = true;
    const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading'
      });
    await loading.present();
		  this.app.verifyClub(this.api_token, this.id).subscribe(async (res: any) => {
        // console.log(res);
        await loading.dismiss();
			// this.loading = false;
			     if (res.status === 'success') {
        // this.alertService.success(res.message);
        this.presentToast('success', res.message);
				    this.router.navigateByUrl('/app/home/clubs');
				// this.code = res.result.code;
      } else {
        this.presentToast('danger', res.message);
				// this.alertService.danger(res.message);
			}
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
}
