/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { AppService } from '../../_services/app.service';
import {format} from 'date-fns';
import { GrServiceService } from 'src/app/_services/gr-service.service';

@Component({
  selector: 'app-room-history',
  templateUrl: './room-history.page.html',
  styleUrls: ['./room-history.page.scss'],
})
export class RoomHistoryPage implements OnInit {

  historyForm;
	model: any = {};
	allRooms: any = [];
	moderators: any = {};
	roomId: any;
	// tslint:disable-next-line: variable-name
	api_token: any;
	page = 1;
	date: '';
  disable = false;
  setDisplay = false;
  constructor(
    private app: GrServiceService,
    private router: Router,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private alertController: AlertController
  ) { }

  async ionViewWillEnter(){
    const user: any = await JSON.parse(localStorage.getItem('user'));
	   const result = user.result;
    this.api_token = result.api_token;
    this.getRoomHistory();
  }

  async ngOnInit() {

  }

  async presentToast(color, message) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 3000
    });
    toast.present();
  }

  getRoomHistory() {
    this.app.getRoomHistory(this.page, this.api_token).subscribe((res: any) => {
      if (res.status === 'success') {
        this.setDisplay = true;
        this.allRooms = res.result;
        // console.log(this.allRooms);
      } else {
        const color = 'danger';
        this.setDisplay = false;
						  this.presentToast(color, res.message);
					}
    });
  }

  analyze(roomId) {
		// alert(roomId);
		this.router.navigateByUrl('/tabs/grtools/track/' + roomId);
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

  async onSubmit() {
    let date = this.model.date;
    date =  format(new Date(date), 'yyyy-MM-dd');
    // console.log(date);
    // const date = form.value.toLocaleDateString().split(',')[0];
    // console.log(date);
		// console.log(this.model);
    // const date = this.model.dates;
    const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading'
      });
    await loading.present();
		  this.app.getRoomHistorySort(this.page, this.api_token, date).subscribe(async (res: any) => {
        if (res.status === 'success') {
        await loading.dismiss();
        this.allRooms = res.result;
        // console.log(this.allRooms);
        } else if (res.status === 'upgrade') {
          await loading.dismiss();
          const color = 'danger';
          this.presentToast(color, res.message);
				// this.alertService.danger(res.message);
				      this.router.navigateByUrl('/home/upgrade');
        } else if (res.status === 'validate') {
          await loading.dismiss();
          const color = 'danger';
          this.presentToast(color, res.message);
				// this.alertService.danger(res.message);
			       this.router.navigateByUrl('/auth/validate/ ' + this.api_token);
			} else {
            // this.alertService.danger(res.message);
        const color = 'danger';
        this.presentToast(color, res.message);
					}
			// console.log(res);
			// this.allRooms = res.result;
		});
  }

  goHome() {}

}
