/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { AppService } from 'src/app/_services/app.service';
import {format} from 'date-fns';
import * as moment from 'moment';

@Component({
  selector: 'app-club-details',
  templateUrl: './club-details.component.html',
  styleUrls: ['./club-details.component.scss'],
})
export class ClubDetailsComponent implements OnInit {

  	model: any = {};
	// tslint:disable-next-line: variable-name
	api_token: any;
	id: string;
	newDate: string;
	results: any = {};
  constructor(
    private app: AppService,
	   private router: Router,
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private alertController: AlertController
  ) { }

  async ngOnInit() {
    this.newDate = moment().format('YYYY-MM-DD');
    const user: any = await JSON.parse(localStorage.getItem('user'));
		  const result = user.result;
    this.api_token = result.api_token;
    this.route.paramMap.subscribe(paramMap => {
			this.id = paramMap.get('id');
    });

    this.clubAnalytics();
  }

  async presentToast(color, message) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 3000
    });
    toast.present();
  }
  async clubAnalytics() {
    const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading'
      });
    await loading.present();
    this.app.clubAnalytics(this.api_token, this.id, this.newDate).subscribe(async (res: any) => {
      await loading.dismiss();
			   if (res.status === 'success') {
					this.results = res.result;
					} else if (res.status === 'upgrade') {
        // this.alertService.danger(res.message);
        const color = 'danger';
        this.presentToast(color, res.message);
				    this.router.navigateByUrl('/tabs/upgrade');
			}	else {
            // this.alertService.danger(res.message);
        const color = 'danger';
        this.presentToast(color, res.message);
					}
			// console.log(res);
			// this.results = res.result;
		});
  }

  analyze(roomId) {
		// alert(roomId);
		this.router.navigateByUrl('/tabs/chtools/track/' + roomId);
  }

  async onSubmit() {
		// console.log(this.model);
    let date = this.model.date;
    date =  format(new Date(date), 'yyyy-MM-dd');
    // console.log(date);
    this.newDate = date;
    const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading'
      });
    await loading.present();
    this.app.clubAnalytics(this.api_token, this.id, this.newDate).subscribe(async (res: any) => {
        await loading.dismiss();
			     if (res.status === 'success') {
             this.results = res.result;
             // console.log(this.results);
					} else if (res.status === 'upgrade') {
        // this.alertService.danger(res.message);
        const color = 'danger';
        this.presentToast(color, res.message);
				    this.router.navigateByUrl('/tabs/upgrade');
			}	else {
            // this.alertService.danger(res.message);
        const color = 'danger';
        this.presentToast(color, res.message);
					}
			// console.log(res);
			// this.results = res.result;
		});
  }

  transformMinute(value: number): string {
    const hours = Math.floor(value / 60);
    const minutes = Math.floor(value % 60);
    return hours + ' hrs ' + minutes + ' mins';
  }

}
