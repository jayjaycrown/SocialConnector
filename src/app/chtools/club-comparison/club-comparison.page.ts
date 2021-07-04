/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { AreaModalComponent } from '../../_helpers/area-modal/area-modal.component';
import {format} from 'date-fns';
import * as moment from 'moment';
import { AppService } from '../../_services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-club-comparison',
  templateUrl: './club-comparison.page.html',
  styleUrls: ['./club-comparison.page.scss'],
})
export class ClubComparisonPage implements OnInit {
  club1 = '';
	club2 = '';
	model: any = {};
	// tslint:disable-next-line: variable-name
	api_token: any;
	allRooms: any = [];
	allRooms2: any = [];
	clubId1: any;
	clubId2: any;
	page = 1;
	date: string;
	club1Details: any = {};
	club2Details: any = {};
	error: any;
	status = false;
  club1Name: any;
  club2Name: any;
  constructor(
    private modalController: ModalController,
    private app: AppService,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private router: Router
  ) { }

  async ngOnInit() {
    const user: any = await JSON.parse(localStorage.getItem('user'));
		  const result = user.result;
		  this.api_token = result.api_token;
		  this.date = moment().format('YYYY-MM-DD');
  }


  async openAreaModal(club: string) {
    const modal = await this.modalController.create({
    component: AreaModalComponent,
      componentProps: {
        club
    }
    });
    await modal.present();
    const data: any = await modal.onDidDismiss();
    console.log(data);
    this.club1Name = data.data.name;
    this.club1 = data.data.id;
    console.log(this.club1);
    // console.log(data.areaName);
    // this.pickupArea = data.data
  }

  async dropoffModal(club: string) {
    const modal = await this.modalController.create({
    component: AreaModalComponent,
      componentProps: {
        club
    }
    });

    await modal.present();

    const data: any = await modal.onDidDismiss();
    console.log(data);
    this.club2Name = data.data.name;
    this.club2 = data.data.id;
    console.log(this.club2);
    // console.log(data.areaName);
    // this.dropoffArea = data.data

  }


  async presentToast(color, message) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 3000
    });
    toast.present();
  }
  async onSubmit() {
    const date = this.model.date;
    this.date =  format(new Date(date), 'yyyy-MM-dd');
    console.log(date);
    const color = 'danger';
    const loading = await this.loadingController.create({
       spinner: null,
       cssClass: 'custom-loading'
      });
    await loading.present();
    this.app.CompareClubs(this.api_token, this.club1, this.club2, this.date).subscribe(async (res: any) => {
    await loading.dismiss();
    if (res.status === 'success') {
          this.status = true;
          this.club1Details = res.result.club1;
          this.club2Details = res.result.club2;
          // console.log(this.club2Details);
        } else if (res.status === 'upgrade') {
        // this.alertService.danger(res.message);
          this.presentToast(color, res.message);
          this.router.navigateByUrl('/home/upgrade');
        } else {
          this.presentToast(color, res.message);
          this.status = false;

          // this.alertService.danger(res.message);
          // console.log(this.error);
        }
			});
  }

  transformMinute(value: number): string {
    const hours = Math.floor(value / 60);
    const minutes = Math.floor(value % 60);
    return hours + ' hrs ' + minutes + ' mins';
  }
}
