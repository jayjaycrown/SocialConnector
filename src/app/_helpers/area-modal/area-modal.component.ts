/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit } from '@angular/core';
// import { AppService } from '../../_services/app.service';
import { AppService } from '../../_services/app.service';
import { Plugins } from '@capacitor/core';
import { ModalController, LoadingController, ToastController, AlertController, NavParams } from '@ionic/angular';
import * as moment from 'moment';
import { Router } from '@angular/router';
// eslint-disable-next-line @typescript-eslint/naming-convention
const { Storage } = Plugins;
const TOKEN_KEY = 'my-token';
@Component({
  selector: 'app-area-modal',
  templateUrl: './area-modal.component.html',
  styleUrls: ['./area-modal.component.scss'],
})
export class AreaModalComponent implements OnInit {
  // @Input() club: string;
  // @Input() state: any;
  // token: { value: string; };
  // areas: any;
  // availableArea: any;

  searchText = '';
  items: any[];
  filterItems: any[];
  selectedItems: any = [];
  displayOk: any = false;
  titleText: any;
  model: any = {};
  // tslint:disable-next-line: variable-name
  api_token: any;
  date: string;
  allRooms: any;
  clubname = '';
  club: string;

  constructor(
    private modalCtrl: ModalController,
    // private auth: AuthService,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private alertController: AlertController,
    public navParams: NavParams,
    private app: AppService,
    private router: Router
  ) {
    this.club = this.navParams.get('club');
    // alert(this.club);
    // this.titleText = this.navParams.get('state');
    // this.FilterItems();
    // console.log( this.items);
    this.clubname = this.club;
    console.log(this.club);
  }

  async ngOnInit() {
    const user: any = await JSON.parse(localStorage.getItem('user'));
		  const result = user.result;
		  this.api_token = result.api_token;
		  this.date = moment().format('YYYY-MM-DD');
  }

  async presentToast(color, message) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 3000
    });
    toast.present();
  }
  FilterItems() {

    const data: string = this.model.club;
    const color = 'danger';
    // console.log(data.length);
    if (data.length >= 4) {
     this.app.searchClub(this.api_token, data).subscribe((res: any) => {
				if (res.status === 'success') {
					this.allRooms = res.result;
        } else if (res.status === 'upgrade') {
          this.presentToast(color, res.message);
				// this.alertService.danger(res.message);
				      this.router.navigateByUrl('/home/upgrade');
        } else {
          this.presentToast(color, res.message);
						// this.alertService.danger(res.message);
					}
			// console.log(res);
			// this.allRooms = res.result;
		});
    }
    // this.filterItems = this.items;
    // if (this.searchText.trim() !== '') {
    //   this.filterItems = this.filterItems.filter((item) => {
    //     const test: string = item.areaName;
    //     return (test.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1);
    //   });
    // }
  }

  CheckChange(item: any, name: string) {
    this.modalCtrl.dismiss({
      id: item,
      name
    });
  }

  dismiss() {
      this.modalCtrl.dismiss();
    }

  // CloseModel() {
  //   this.viewCtrl.dismiss(this.selectedItems);
  // }






}
