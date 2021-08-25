/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AppService } from '../../_services/app.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.page.html',
  styleUrls: ['./announcements.page.scss'],
})
export class AnnouncementsPage implements OnInit {
	// tslint:disable-next-line: variable-name
	api_token: any;
	clubLists: any;
	model: any = {};
  constructor(
    	private app: AppService,
		   private router: Router,
     private route: ActivatedRoute,
     private loadingController: LoadingController,
     private toastController: ToastController
  ) { }

  async ngOnInit() {
    	const user: any = await JSON.parse(localStorage.getItem('user'));
		   const result = user.result;
		   this.api_token = result.api_token;
		   this.fetchClubs();
  }

  async fetchClubs() {
      const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading'
        });
      await loading.present();
      this.app.fetchClub(this.api_token).subscribe(async (res: any) => {
      await loading.dismiss();
			  //  console.log(res);
			   this.clubLists = res.result;
		});
    }

  async onSubmit() {
    const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading'
        });
    await loading.present();
		// this.loading = true;
		  const message = this.model.message;
		  const club_id = this.model.club_id;
		// this.loading = true;
		  // console.log(message, club_id, this.api_token);
		  this.app.postNotification(this.api_token, club_id, message).subscribe(async (res: any) => {
      // this.loading = false;
      await loading.dismiss();
      if (res.status === 'success') {
          this.presentToast('success', res.message);
				// this.alertService.success(res.message);
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
