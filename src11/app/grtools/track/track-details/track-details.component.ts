/* eslint-disable eqeqeq */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  LoadingController,
  ToastController,
  NavController,
  Platform,
} from '@ionic/angular';

import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import {
  SingleDataSet,
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip,
  Color,
} from 'ng2-charts';
import * as moment from 'moment';
import { AppService } from 'src/app/_services/app.service';
import { AuthService } from '../../../_services/auth.service';
// import { ExportToCsv } from 'export-to-csv';
// import { CSVService } from 'ionic-csv';
import { File } from '@ionic-native/file/ngx';
// import { HTTP } from '@ionic-native/http/ngx';
import { Papa } from 'ngx-papaparse';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { GrServiceService } from 'src/app/_services/gr-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-track-details',
  templateUrl: './track-details.component.html',
  styleUrls: ['./track-details.component.scss'],
})
export class TrackDetailsComponent implements OnInit, OnDestroy {
  key = 'name';
  key1 = 'username';
  key2 = 'name';
  key3 = 'name';
  key4 = 'name';
  key5 = 'name';
  reverse = false;
  reverse1 = false;
  reverse2 = false;
  reverse3 = false;
  reverse4 = false;
  reverse5 = false;
  showChat = true;
  p = 1;
  q = 1;
  r = 1;
  s = 1;
  t = 1;
  u = 1;
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Party Hat', 'Non Party Hat'];
  public pieChartData: SingleDataSet = [30, 50];
  public pieChartType: ChartType = 'doughnut';
  public pieChartLegend = false;
  public pieChartPlugins = [];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(127,126,120)', 'rgba(236,231,205)'],
    },
  ];

  public piechatLabels2: Label[] = [
    'Skintone 1 ✋🏻',
    'Skintone 2 ✋🏼',
    'skintone 3 ✋🏽',
    'Skintone 4 ✋🏾',
    'Skintone 5 ✋🏿',
  ];
  public pieChartData2: SingleDataSet = [30, 50, 40, 10, 5];
  public pieChartType2: ChartType = 'pie';
  public pieChartPlugins2 = [];
  public pieChartColors2 = [
    {
      backgroundColor: [
        'rgb(127,126,120)',
        'rgb(236,231,205)',
        'rgb(134, 10,50)',
        'rgb(192,128,104)',
        'rgb(12,18,14)',
      ],
    },
  ];

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [
    'ST1 ✋🏻',
    'ST2 ✋🏼',
    'ST3 ✋🏽',
    'ST4 ✋🏾',
    'ST5 ✋🏿',
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartColors: Array<any> = [
    {
      // first color
      backgroundColor: 'rgb(127,126,120)',
      borderColor: 'rgb(127,126,120)',
      pointBackgroundColor: 'rgb(127,126,120)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(127,126,120)',
    },
    {
      // Third color
      backgroundColor: 'rgb(134, 10,50)',
      borderColor: 'rgb(134, 10,50)',
      pointBackgroundColor: 'rgb(134, 10,50)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(134, 10,50)',
    },
    {
      // Fourth color
      backgroundColor: 'rgb(192,128,104)',
      borderColor: 'rgb(192,128,104)',
      pointBackgroundColor: 'rgb(192,128,104)',
      pointBorderColor: '#000',
      pointHoverBackgroundColor: '#000',
      pointHoverBorderColor: 'rgb(192,128,104)',
    },
    {
      // Fifth color
      backgroundColor: 'rgb(12,18,14)',
      borderColor: 'rgb(12,18,14)',
      pointBackgroundColor: 'rgb(12,18,14)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(12,18,14)',
    },
  ];
  showChart = false;
  loadMore = false;
  fullData: any = {};
  moderators: any[];
  spdData: any = [];
  dataListener: number[] = [];
  dataSpeaker: number[] = [];
  dataSkinTone: number[] = [];
  dataLTSkinTone: number[] = [];
  dataSpeakerSkinTone: number[] = [];
  dataModSkinTone: number[] = [];
  dataModerator: number[] = [];
  percentListenerNew: number;
  percentListenerOld: number;
  listenerNewSTData: number[] = [];
  listenerOldSTData: number[] = [];
  public pieChartDataL: any = this.dataListener;
  public pieChartDataS: any = this.dataSpeaker;
  public pieChartDataM: any = this.dataModerator;
  public pieChartDataSkin: any = this.dataSkinTone;
  public pieChartLTSkin: any = this.dataLTSkinTone;
  public pieChartSpeakerSkin: any = this.dataSpeakerSkinTone;
  public pieChartModSkin: any = this.dataModSkinTone;

  public barChartData: ChartDataSets[] = [
    { data: this.listenerNewSTData, label: 'Listeners' },
    { data: [28, 48, 40, 19, 86], label: 'Speakers' },
    { data: [28, 48, 40, 19, 86], label: 'Moderators' },
    { data: [28, 48, 40, 19, 86], label: 'Avg Listened Time' },
  ];
  percentSpeakerNew: number;
  percentSpeakerOld: number;
  percentModeratorNew: number;
  percentModeratorrOld: number;
  percentST1: number;
  percentST2: number;
  percentST3: number;
  percentST4: number;
  percentST5: number;

  spST1: number;
  spST2: number;
  spST3: number;
  spST4: number;
  spST5: number;

  modST1: number;
  modST2: number;
  modST3: number;
  modST4: number;
  modST5: number;

  modLT1: number;
  modLT2: number;
  modLT3: number;
  modLT4: number;
  modLT5: number;

  listenerNewSK1: number;
  listenerNewSK2: number;
  listenerNewSK3: number;
  listenerNewSK4: number;
  listenerNewSK5: number;

  listenerOldSK1: number;
  listenerOldSK2: number;
  listenerOldSK3: number;
  listenerOldSK4: number;
  listenerOldSK5: number;
  model: any = {};
  setDisplay = false;
  duration: any;
  durationMonth: any;
  durationDays;
  durationhrs;
  durationMins;
  durationSecs;
  id: string;
  refresh: any;
  durationDays1: any;
  durationhrs1: any;
  durationMins1: any;
  durationSecs1: any;
  durationMonth1: any;
  duration1: any;
  avgListend: any;
  avgListend1: any;
  roomStatus: any;
  greenImg = 'assets/img/green.gif';
  redImg = 'assets/img/red.gif';
  imageLight;
  api_token: any;
  thisDay1: Date;
  result: any;
  upgrade = false;
  date2: any;
  name: string;
  followers_gained: any;
  top: any;
  searchUser = false;
  newFollowers_gained: any;
  name2: string;
  newTop: any[];
  thisDay: Date;
  name3: string;
  name4: string;
  name5: string;
  name6: string;
  superFans = [];
  newSuperFans: any[];
  Fans = [];
  newFans: any[];
  showTwitter = false;
  showInsta = false;
  allmoderators: any[];
  lastmod: any;
  modLength: number;
  modshowInsta: boolean;
  modshowTwitter: boolean;
  showSuperTwitter: boolean;
  showSuperInsta: boolean;
  speakersshowTwitter = false;
  speakershowInsta = false;
  speakers: any[];
  newSpeakers: any[];
  showSpeaker = false;
  newModerators: any[];
  newSpdData: any[];
  userId: any;
  hs_portal_id: any;
  exportToHs = false;
  hideSkintone = true;
  showSpd: boolean;
  channel: any;
  loading: HTMLIonLoadingElement;
  roomtrack: any;

  date_entered: any[] = [];
  listeners_data: number[] = [];
  public lineChartData: ChartDataSets[] = [
    { data: this.listeners_data, label: 'Active Listeners' },
  ];
  public lineChartLabels: Label[] = this.date_entered;
  public lineChartColors: Color[] = [
    {
      // grey
      backgroundColor: 'rgba(9, 175, 252, 0.2)',
      borderColor: 'rgba(9, 175, 252,1)',
      pointBackgroundColor: '#fff',
      pointBorderColor: 'rgba(9, 175, 252,1)',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177, 0.8)',
      pointBorderWidth: 3,
    },
  ];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };

  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];
  showData = false;
  modSpeaker: any[];
  followedBySpeaker: any[];
  othersInRoom: any[];
  activeMods: any[];
  roomOn: boolean;
  showDisplay: any;
  sortKey = '';
  randomElement: any = {};
  showonlyone = false;
  event = false;
  customPopoverOptions: any = {
    header: 'Badge',
    subHeader: 'Add a badge',
  };

  customActionSheetOptions: any = {
    header: 'Sort',
    subHeader: 'Sort by',
  };
  rrverse = true;
  listeners_data2: any;
  peak: number;
  constructor(
    private router: Router,
    private app: GrServiceService,
    private auth: AuthService,
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private file: File,
    private socialSharing: SocialSharing,
    // private http: HTTP,
    private papa: Papa,
    private plt: Platform
  ) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  sortWoKey() {
    this.rrverse = !this.rrverse;
  }

  sort1(key) {
    this.key1 = key;
    this.reverse1 = !this.reverse1;
  }

  sort2(key) {
    this.key2 = key;
    this.reverse2 = !this.reverse2;
  }
  sort3(key) {
    this.key3 = key;
    this.reverse3 = !this.reverse3;
  }
  sort4(key) {
    this.key4 = key;
    this.reverse4 = !this.reverse4;
  }
  sort5(key) {
    this.key5 = key;
    this.reverse5 = !this.reverse5;
  }

  search() {
    this.newFollowers_gained = this.followers_gained;
    if (this.name === '') {
      this.newFollowers_gained = this.followers_gained;
    } else {
      this.newFollowers_gained = this.newFollowers_gained.filter((res) =>
        String(res.name)
          .toLocaleLowerCase()
          .match(this.name.toLocaleLowerCase())
      );
    }
  }
  search1() {
    this.newFans = this.Fans;
    if (this.name3 === '') {
      this.newFans = this.Fans;
    } else {
      this.newFans = this.newFans.filter((resp) =>
        String(resp.name)
          .toLocaleLowerCase()
          .match(this.name3.toLocaleLowerCase())
      );
    }
  }

  search2() {
    this.newTop = this.top;
    if (this.name2 === '') {
      this.newTop = this.top;
      this.searchUser = false;
    } else {
      this.searchUser = true;
      this.newTop = this.newTop.filter((resp) =>
        String(resp.name)
          .toLocaleLowerCase()
          .match(this.name2.toLocaleLowerCase())
      );
    }
  }

  search3() {
    this.newSuperFans = this.superFans;
    if (this.name3 === '') {
      this.newSuperFans = this.superFans;
    } else {
      this.newSuperFans = this.newSuperFans.filter((resp) =>
        String(resp.name)
          .toLocaleLowerCase()
          .match(this.name3.toLocaleLowerCase())
      );
    }
  }

  search4() {
    this.newSpeakers = this.speakers;
    if (this.name4 === '') {
      this.newSpeakers = this.speakers;
    } else {
      this.newSpeakers = this.newSpeakers.filter((resp) =>
        String(resp.name)
          .toLocaleLowerCase()
          .match(this.name4.toLocaleLowerCase())
      );
    }
  }

  search5() {
    this.newModerators = this.moderators;
    if (this.name5 === '') {
      this.newModerators = this.moderators;
    } else {
      this.newModerators = this.newModerators.filter((resp) =>
        String(resp.name)
          .toLocaleLowerCase()
          .match(this.name5.toLocaleLowerCase())
      );
    }
  }

  search6() {
    this.newSpdData = this.spdData;
    if (this.name6 === '') {
      this.newSpdData = this.spdData;
    } else {
      this.newSpdData = this.newSpdData.filter((resp) =>
        String(resp.name)
          .toLocaleLowerCase()
          .match(this.name6.toLocaleLowerCase())
      );
    }
  }

  export2() {
    const header = [];
    const data = this.newSuperFans[0];
    for (const property in data) {
      if (!data.hasOwnProperty(property)) {
        continue;
      }
      header.push(property);
    }

    const csv = this.papa.unparse({
      fields: header,
      data: this.newSuperFans,
    });
    // console.log(csv)
    if (this.plt.is('capacitor') || this.plt.is('cordova')) {
      this.file
        .writeFile(this.file.dataDirectory, 'super_fans.csv', csv, {
          replace: true,
        })
        .then((res) => {
          this.socialSharing.share(null, null, res.nativeURL, null);
        })
        .catch();
    } else {
      const blob = new Blob([csv]);
      const a = window.document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = 'super_fans.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    // console.log(this.newSuperFans)
  }

  export() {
    const header = [];
    const data = this.newTop[0];
    for (const property in data) {
      if (!data.hasOwnProperty(property)) {
        continue;
      }
      header.push(property);
    }

    const csv = this.papa.unparse({
      fields: header,
      data: this.newTop,
    });
    // console.log(csv)
    if (this.plt.is('capacitor') || this.plt.is('cordova')) {
      this.file
        .writeFile(this.file.dataDirectory, 'top_listeners.csv', csv, {
          replace: true,
        })
        .then((res) => {
          this.socialSharing.share(null, null, res.nativeURL, null);
        })
        .catch();
    } else {
      const blob = new Blob([csv]);
      const a = window.document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = 'top_listeners.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    // console.log(this.newTop)
  }
  export3() {
    const header = [];
    const data = this.newFans[0];
    for (const property in data) {
      if (!data.hasOwnProperty(property)) {
        continue;
      }
      header.push(property);
    }

    const csv = this.papa.unparse({
      fields: header,
      data: this.newFans,
    });
    // console.log(csv)
    if (this.plt.is('capacitor') || this.plt.is('cordova')) {
      this.file
        .writeFile(this.file.dataDirectory, 'new_fans.csv', csv, {
          replace: true,
        })
        .then((res) => {
          this.socialSharing.share(null, null, res.nativeURL, null);
        })
        .catch();
    } else {
      const blob = new Blob([csv]);
      const a = window.document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = 'new_fans.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    // console.log(this.newFans)
  }
  export4() {
    const header = [];
    const data = this.newFollowers_gained[0];
    for (const property in data) {
      if (!data.hasOwnProperty(property)) {
        continue;
      }
      header.push(property);
    }
    const csv = this.papa.unparse({
      fields: header,
      data: this.newFollowers_gained,
    });
    // console.log(csv)
    if (this.plt.is('capacitor') || this.plt.is('cordova')) {
      this.file
        .writeFile(this.file.dataDirectory, 'follwers_gained.csv', csv, {
          replace: true,
        })
        .then((res) => {
          this.socialSharing.share(null, null, res.nativeURL, null);
        })
        .catch();
    } else {
      const blob = new Blob([csv]);
      const a = window.document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = 'follwers_gained.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }
  export5() {
    const header = [];
    const data = this.moderators[0];
    for (const property in data) {
      if (!data.hasOwnProperty(property)) {
        continue;
      }
      header.push(property);
    }
    const csv = this.papa.unparse({
      fields: header,
      data: this.moderators,
    });
    // console.log(csv)
    if (this.plt.is('capacitor') || this.plt.is('cordova')) {
      this.file
        .writeFile(this.file.dataDirectory, 'moderators.csv', csv, {
          replace: true,
        })
        .then((res) => {
          this.socialSharing.share(null, null, res.nativeURL, null);
        })
        .catch();
    } else {
      const blob = new Blob([csv]);
      const a = window.document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = 'moderators.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }
  export6() {
    const header = [];
    const data = this.speakers[0];
    for (const property in data) {
      if (!data.hasOwnProperty(property)) {
        continue;
      }
      header.push(property);
    }
    const csv = this.papa.unparse({
      fields: header,
      data: this.speakers,
    });
    // console.log(csv)
    if (this.plt.is('capacitor') || this.plt.is('cordova')) {
      this.file
        .writeFile(this.file.dataDirectory, 'speakers.csv', csv, {
          replace: true,
        })
        .then((res) => {
          this.socialSharing.share(null, null, res.nativeURL, null);
        })
        .catch();
    } else {
      const blob = new Blob([csv]);
      const a = window.document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = 'speakers.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }

  export7() {
    const header = [];
    const data = this.spdData[0];
    for (const property in data) {
      if (!data.hasOwnProperty(property)) {
        continue;
      }
      header.push(property);
    }
    const csv = this.papa.unparse({
      fields: header,
      data: this.spdData,
    });
    // console.log(csv)
    if (this.plt.is('capacitor') || this.plt.is('cordova')) {
      this.file
        .writeFile(this.file.dataDirectory, 'Speakers_data.csv', csv, {
          replace: true,
        })
        .then((res) => {
          this.socialSharing.share(null, null, res.nativeURL, null);
        })
        .catch();
    } else {
      const blob = new Blob([csv]);
      const a = window.document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = 'Speakers_data.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }

  exportOthers() {
    const header = [];
    const data = this.othersInRoom[0];
    for (const property in data) {
      if (!data.hasOwnProperty(property)) {
        continue;
      }
      header.push(property);
    }
    const csv = this.papa.unparse({
      fields: header,
      data: this.othersInRoom,
    });
    // console.log(csv)
    if (this.plt.is('capacitor') || this.plt.is('cordova')) {
      this.file
        .writeFile(this.file.dataDirectory, 'others_in_the_room.csv', csv, {
          replace: true,
        })
        .then((res) => {
          this.socialSharing.share(null, null, res.nativeURL, null);
        })
        .catch();
    } else {
      const blob = new Blob([csv]);
      const a = window.document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = 'others_in_the_room.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }

  async ngOnInit() {
    this.date2 = moment().format('YYYY-MM-DD');
    const user: any = await JSON.parse(localStorage.getItem('user'));
    const result = user.result;
    this.api_token = result.api_token;
    this.userId = result.ch_user_id;

    this.route.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('id');
    });
    this.loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading',
    });
    await this.loading.present();

    await this.getAppData(this.id, this.api_token);
    // setTimeout(this.checkVariable, 10000);
    // this.waitForElement();
    // setTimeout(() => {
    //   console.log(this.roomStatus);
    //   if (this.roomStatus === 'ongoing') {
    //     this.refresh = setInterval(() => {
    //       // console.log('Setting');
    //       this.getAppData(this.id, this.api_token);
    //     }, 30000);
    //   } else {
    //     clearInterval(this.refresh);
    //   }
    // }, 30000);

    this.getDetails();
  }
  async doRefresh(event) {
    // console.log(event)
    await this.getAppData(this.id, this.api_token);
    // this.event = event;
    // console.log(this.event);
    if (this.event === true) {
      event.target.complete();
    }
  }

  ngOnDestroy() {
    this.fullData = {};
    clearTimeout(this.refresh);
    if (this.refresh) {
      clearTimeout(this.refresh);
      // console.log(this.refresh);
      console.log('clearing');
      clearInterval(this.refresh);
    }
    // if (this.roomtrack) {
    //   clearInterval(this.roomtrack);
    // }
    clearInterval(this.refresh);
  }
  async presentToast(color, message) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 3000,
    });
    toast.present();
  }
  onClick() {
    if (this.upgrade === true) {
      const color = 'danger';
      this.presentToast(color, 'Please Upgrade to view more data');
      // this.alertService.danger('Please Upgrade to view more data');
      this.loadMore = false;
    } else {
      this.loadMore = true;
    }
  }

  // tslint:disable-next-line: variable-name
  async getAppData(data, api_token) {
    // const loading = await this.loadingController.create({
    //   spinner: null,
    //   cssClass: 'custom-loading',
    // });
    // await loading.present();
    this.superFans = [];
    const fields: string[] = [];
    this.app.getRoomDetails(data, api_token).subscribe(async (res: any) => {
      // await loading.dismiss();
      // console.log(res);
      await this.loading.dismiss();
      this.event = true;
      if (res.status === 'success') {
        this.showData = true;
        this.fullData = res.result;
        this.channel = this.fullData.channel;
        this.getRoomStats();
        this.Fans = this.fullData.fans;
        this.newFans = this.Fans;
        this.followers_gained = this.fullData.followers_gained;
        this.newFollowers_gained = this.followers_gained;
        // eslint-disable-next-line eqeqeq
        if (this.fullData.total_listeners_new_3 == 0) {
          this.hideSkintone = true;
        } else {
          this.hideSkintone = false;
        }
        this.top = this.fullData.top;
        this.newTop = this.top;
        if (this.newTop.length > 0) {
          if ('twitter' in this.newTop[0]) {
            this.showTwitter = true;
          } else {
            this.showTwitter = false;
          }
          if ('instagram' in this.newTop[0]) {
            this.showInsta = true;
          } else {
            this.showInsta = false;
          }
        }

        for (let i = 0; i < this.top.length; i++) {
          const element = this.top[i];
          if (element.fan === true) {
            this.superFans.push(element);
          }
          this.newSuperFans = this.superFans;

          if (this.newSuperFans.length > 0) {
            if (this.newSuperFans[0].hasOwnProperty('twitter')) {
              this.showSuperTwitter = true;
            } else {
              this.showSuperTwitter = false;
            }

            if (this.newSuperFans[0].hasOwnProperty('instagram')) {
              this.showSuperInsta = true;
            } else {
              this.showSuperInsta = false;
            }
          }
        }
        // for (const iterator of this.top) {
        // 	if (iterator.fan === true) {
        // 		this.superFans.push(iterator)
        // 	}
        // }
        this.setDisplay = true;
        this.roomStatus = this.fullData.room_status;
        // console.log(this.roomStatus);

        // alert(this.roomStatus);
        if (this.roomStatus === 'ongoing') {
          console.log('checking');
          this.roomOn = true;
          this.refresh = setTimeout(() => {
            this.getAppData(this.id, this.api_token);
          }, 30000);
          this.imageLight = this.greenImg;
        } else {
          this.roomOn = false;
          clearTimeout(this.refresh);
          this.imageLight = this.redImg;
        }
        const size = 5;
        this.moderators = this.fullData.moderators;
        // eslint-disable-next-line @typescript-eslint/no-shadow
        for (const data of this.moderators) {
          // eslint-disable-next-line radix
          if (data.user_id === parseInt(this.userId)) {
            if (this.hs_portal_id != null || this.hs_portal_id != undefined) {
              this.exportToHs = true;
            } else {
              this.exportToHs = false;
            }
          } else {
            this.exportToHs = false;
          }
        }
        this.spdData = this.fullData.spd_data;
        if (this.spdData && this.spdData.length > 0) {
          this.showSpd = true;
        } else {
          this.showSpd = false;
        }
        this.newSpdData = this.spdData;
        this.newModerators = this.moderators;
        this.speakers = this.fullData.speakers;
        this.speakerWithMod();
        // this.getActiveMods();
        if (this.speakers) {
          this.showSpeaker = true;
        }
        this.newSpeakers = this.speakers;
        if (this.speakers && this.speakers.length > 0) {
          if (this.speakers[0].hasOwnProperty('twitter')) {
            this.speakersshowTwitter = true;
          } else {
            this.speakersshowTwitter = false;
          }
          const a = 'instagram';
          // alert(this.moderators[0].hasOwnProperty('instagram'));
          if (this.speakers[0].hasOwnProperty(a)) {
            this.speakershowInsta = true;
          } else {
            this.speakershowInsta = false;
          }
        }

        if (this.moderators.length > 0) {
          if (this.moderators[0].hasOwnProperty('twitter')) {
            this.modshowTwitter = true;
          } else {
            this.modshowTwitter = false;
          }
          const a = 'instagram';
          // alert(this.moderators[0].hasOwnProperty('instagram'));
          if (this.moderators[0].hasOwnProperty(a)) {
            this.modshowInsta = true;
          } else {
            this.modshowInsta = false;
          }
        }
        this.allmoderators = this.moderators.slice(0, size);
        // alert(this.moderators.length)
        this.modLength = this.moderators.length;
        // this.moderators = JSON.parse(this.fullData.moderators);
        this.percentListenerNew = parseFloat(
          this.fullData.percent_listeners_new
        );
        this.percentListenerOld = parseFloat(
          this.fullData.percent_listeners_old
        );
        this.dataListener.length = 0;
        this.dataListener.push(
          this.percentListenerNew,
          this.percentListenerOld
        );
        // // console.log(this.data);
        this.percentSpeakerNew = parseFloat(this.fullData.percent_speakers_new);
        this.percentSpeakerOld = parseFloat(this.fullData.percent_speakers_old);
        this.dataSpeaker.length = 0;
        this.dataSpeaker.push(this.percentSpeakerNew, this.percentSpeakerOld);
        // // console.log(this.dataSpeaker);
        this.percentModeratorNew = parseFloat(
          this.fullData.percent_moderators_new
        );
        this.percentModeratorrOld = parseFloat(
          this.fullData.percent_moderators_old
        );
        this.dataModerator.length = 0;
        this.dataModerator.push(
          this.percentModeratorNew,
          this.percentModeratorrOld
        );
        // console.log(JSON.parse(this.moderators));
        // Listeners % Skintone
        this.percentST1 = parseFloat(this.fullData.percent_listeners_1);
        this.percentST2 = parseFloat(this.fullData.percent_listeners_2);
        this.percentST3 = parseFloat(this.fullData.percent_listeners_3);
        this.percentST4 = parseFloat(this.fullData.percent_listeners_4);
        this.percentST5 = parseFloat(this.fullData.percent_listeners_5);
        this.dataSkinTone.length = 0;
        this.dataSkinTone.push(
          this.percentST1,
          this.percentST2,
          this.percentST3,
          this.percentST4,
          this.percentST5
        );

        // Speakers % skintones
        this.spST1 = parseFloat(this.fullData.percent_speakers_1);
        this.spST2 = parseFloat(this.fullData.percent_speakers_2);
        this.spST3 = parseFloat(this.fullData.percent_speakers_3);
        this.spST4 = parseFloat(this.fullData.percent_speakers_4);
        this.spST5 = parseFloat(this.fullData.percent_speakers_5);
        this.dataSpeakerSkinTone.length = 0;
        this.dataSpeakerSkinTone.push(
          this.spST1,
          this.spST2,
          this.spST3,
          this.spST4,
          this.spST5
        );

        // Moderators % Skintones
        this.modST1 = parseFloat(this.fullData.percent_moderators_1);
        this.modST2 = parseFloat(this.fullData.percent_moderators_2);
        this.modST3 = parseFloat(this.fullData.percent_moderators_3);
        this.modST4 = parseFloat(this.fullData.percent_moderators_4);
        this.modST5 = parseFloat(this.fullData.percent_moderators_5);
        this.dataModSkinTone.length = 0;
        this.dataModSkinTone.push(
          this.modST1,
          this.modST2,
          this.modST3,
          this.modST4,
          this.modST5
        );

        // Listened Time Skintone
        this.modLT1 = parseFloat(this.fullData.avg_listened_1);
        this.modLT2 = parseFloat(this.fullData.avg_listened_2);
        this.modLT3 = parseFloat(this.fullData.avg_listened_3);
        this.modLT4 = parseFloat(this.fullData.avg_listened_4);
        this.modLT5 = parseFloat(this.fullData.avg_listened_5);
        this.dataLTSkinTone.length = 0;
        this.dataLTSkinTone.push(
          this.modLT1,
          this.modLT2,
          this.modLT3,
          this.modLT4,
          this.modLT5
        );

        // Listener New Skintone Data
        this.listenerNewSK1 = parseFloat(this.fullData.percent_listeners_new_1);
        this.listenerNewSK2 = parseFloat(this.fullData.percent_listeners_new_2);
        this.listenerNewSK3 = parseFloat(this.fullData.percent_listeners_new_3);
        this.listenerNewSK4 = parseFloat(this.fullData.percent_listeners_new_4);
        this.listenerNewSK5 = parseFloat(this.fullData.percent_listeners_new_5);
        this.listenerNewSTData.length = 0;
        // tslint:disable-next-line: max-line-length
        this.listenerNewSTData.push(
          this.listenerNewSK1,
          this.listenerNewSK2,
          this.listenerNewSK3,
          this.listenerNewSK4,
          this.listenerNewSK5
        );
        // console.log(this.fullData.room_ended);
        // console.log(this.fullData.room_start);
        // Duration
        if (this.fullData.room_ended) {
          const today: string = this.fullData.room_ended;
          const testing = today.replace(/-/g, '/');
          const newDates = new Date(testing);
          this.thisDay = new Date(newDates.toUTCString());
        } else {
          const today = new Date(this.fullData.now);
          this.thisDay = new Date(today.toUTCString());
        }
        // alert(this.thisDay);
        const test: string = this.fullData.room_start;
        const dattta = test.split('.');
        const datta2 = dattta[0].replace(/T/g, ' ');
        // tslint:disable-next-line: no-shadowed-variable
        const rest = datta2.replace(/-/g, '/');
        const newDate = new Date(rest);
        const anotherDate = new Date(newDate.toUTCString());
        // alert(anotherDate);
        const ms = moment(this.thisDay, 'DD/MM/YYYY HH:mm:ss').diff(
          moment(anotherDate, 'DD/MM/YYYY HH:mm:ss')
        );
        const value = ms;
        const now = moment();
        const secssss = moment.duration(value).seconds();
        const minsss = moment.duration(value).minutes();
        const hrsss = Math.trunc(moment.duration(value).asHours());

        this.durationDays = hrsss + ':' + minsss + ':' + secssss;

        // console.log(this.durationDays);
        // const d = moment.duration(ms);
        // this.duration = d;
        // console.log(this.duration);
        // this.durationDays = moment.utc(this.duration).format('HH:mm');
        // console.log(this.durationDays);
        // this.durationMonth = this.duration._data.months;
        // this.durationDays = this.duration._data.days;
        // this.durationhrs = this.duration._data.hours;
        // this.durationMins = this.duration._data.minutes;
        // this.durationSecs = this.duration._data.seconds;

        // Tracking Duration
        if (this.fullData.room_ended) {
          const today1: string = this.fullData.room_ended;
          // alert(today1)
          // var str = this.fullData.room_ended;
          // var res = str.replace(/-/g, "/");
          const test11 = today1.replace(/-/g, '/');
          // console.log(today.toUTCString());
          // alert(test);
          const newDate11 = new Date(test11);
          this.thisDay1 = new Date(newDate11.toUTCString());
        } else {
          const today = new Date(this.fullData.now);
          // alert(today);
          // console.log(today.toUTCString());
          this.thisDay1 = new Date(today.toUTCString());
        }
        const test1: string = this.fullData.tracking_start;
        const ress = test1.replace(/-/g, '/');
        const newDate1 = new Date(ress);
        const anotherDate1 = new Date(newDate1.toUTCString());
        const ms1 = moment(this.thisDay1, 'DD/MM/YYYY HH:mm:ss').diff(
          moment(anotherDate1, 'DD/MM/YYYY HH:mm:ss')
        );
        const d1 = moment.duration(ms1);

        const value1 = ms1;
        const secssss1 = moment.duration(value1).seconds();
        const minsss1 = moment.duration(value1).minutes();
        const hrsss1 = Math.trunc(moment.duration(value1).asHours());

        this.durationDays1 = hrsss1 + ':' + minsss1 + ':' + secssss1;

        // console.log(this.durationDays1);

        // this.duration1 = d1;
        // // alert(s);
        // // console.log(this.duration1);
        // this.durationMonth1 = this.duration1._data.months;
        // this.durationDays1 = this.duration1._data.days;
        // this.durationhrs1 = this.duration1._data.hours;
        // this.durationMins1 = this.duration1._data.minutes;
        // this.durationSecs1 = this.duration1._data.seconds;
        // outputs: "48:39:30"

        // Avg Listened Conversion
        const num = this.fullData.avg_listened;
        const secs = num * 60;
        const hr = Math.floor(num / 60);
        const minutes = Math.round(num % 60);
        const rseconds = Math.floor(secs % 60);
        // const rminutes = Math.round(minutes);
        this.avgListend = `${hr}:${minutes}:00`;

        // alert(this.fullData.total_listened);
        const num1 = this.fullData.total_listened;
        // const hours1 = (num1 / 60);
        // const rhours1 = Math.floor(hours1);
        // const days = Math.floor(rhours1 / 24);
        // const minutes1 = (hours1 - rhours1) * 60;
        // const rminutes1 = Math.round(minutes1);
        // this.avgListend = days + ' days, ' + rhours1 + ' hr(s), ' + rminutes1 + ' min(s).';
        const h = Math.floor(num1 / 60);
        const days = Math.floor(h / 24);
        const m = Math.round(num1 % 60);
        const s = ((num1 - days * 24 * 60 - h * 60 - m) * 60).toFixed(2);
        this.avgListend1 = `${h}:${m}:00`;
        // console.log(this.avgListend1);
      } else if (res.status === 'upgrade') {
        const color = 'danger';
        this.presentToast(color, res.message);
        // this.alertService.danger(res.message);
        this.router.navigateByUrl('/tabs/upgrade');
      } else if (res.status === 'validate') {
        // this.alertService.danger(res.message);
        const color = 'danger';
        this.presentToast(color, res.message);
        this.router.navigateByUrl('/auth/validate/ ' + this.api_token);
      } else {
        setTimeout(() => {
          this.getAppData(this.id, this.api_token);
        }, 30000);
        this.setDisplay = false;
        const color = 'danger';
        this.presentToast(color, res.message);
        // this.alertService.danger(res.message);
      }
    });
  }

  getRoomStats() {
    // this.date_entered = [];
    // console.log(this.channel, this.api_token);
    setTimeout(() => {
      this.app
        .roomStats(this.api_token, this.channel)
        .subscribe((resp: any) => {
          // console.log(resp);
          const arr = resp.result;
          this.listeners_data2.length = 0;
          for (const x of arr) {
            const listenersData2: number = parseFloat(x.listeners);
            this.listeners_data2.push(listenersData2);
          }
          console.log(this.listeners_data2);
          this.peak = 0;

          for (let i = 0; i <= this.peak; i++) {
            if (this.listeners_data2[i] > this.peak) {
              this.peak = this.listeners_data2[i];
            }
          }
          console.log(this.peak);
          // console.log(arr);
          const data = arr.slice(Math.max(arr.length - 10, 0));
          // console.log(data);
          this.date_entered.length = 0;
          this.listeners_data.length = 0;
          for (const x of data) {
            const datepipe: DatePipe = new DatePipe('en-US');
            const ress = x.date_entered.replace(/-/g, '/');
            const newDate1 = new Date(ress);
            const anotherDate1 = new Date(newDate1.toUTCString());
            // const ms1 = moment(this.thisDay1, 'DD/MM/YYYY HH:mm:ss')
            const formattedDate = datepipe.transform(anotherDate1, 'h:mm a');
            // const formattedDate = datepipe.transform(x.date_entered, 'h:mm a');
            // console.log(formattedDate);
            const listenersData: number = parseFloat(x.listeners);
            this.listeners_data.push(listenersData);
            this.date_entered.push(formattedDate);
          }
          // console.log(this.date_entered);
          // console.log(this.listeners_data);
          this.showChart = true;
          // this.date_entered = data.date_entered;
          // this.listeners_data = data.listeners;
        });
    });
  }
  getDetails() {
    this.auth.getDetails(this.api_token).subscribe(
      (res: any) => {
        if (res.status === 'success') {
          this.result = res.result;
          // console.log(res);
          // this.data = JSON.parse(this.result.data);
          if (this.result.subscription_expiry < this.date2) {
            this.upgrade = true;
          } else {
            this.upgrade = false;
          }
        } else {
          // this.alertService.danger(res.message);
          const color = 'danger';
          this.presentToast(color, res.message);
        }
        // console.log(res);

        // console.log(this.data);
      },
      (err) => {
        // this.alertService.danger(err.message);
        const color = 'danger';
        this.presentToast(color, err.message);
      }
    );
  }

  async exportToHS() {
    const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading',
    });
    await loading.present();
    const channel = this.fullData.channel;
    this.app.exporttohubsport(this.api_token, channel).subscribe(
      async (res: any) => {
        await loading.dismiss();
        // console.log(res);
        if (res.status === 'success') {
          this.presentToast('success', res.message);
        } else if (res.status === 'upgrade') {
          this.presentToast('danger', res.message);
          this.router.navigateByUrl('/app/home/upgrade');
        } else if (res.status === 'validate') {
          this.presentToast('danger', res.message);
          this.router.navigateByUrl('/app/auth/validategr/ ' + this.api_token);
        } else {
          this.presentToast('danger', res.message);
        }
      },
      (err) => {
        this.presentToast('danger', err.message);
      }
    );
  }

  getActiveMods() {
    if (this.roomStatus === 'ongoing') {
      this.moderators = [];
      for (let i = 0; i < this.top.length; i++) {
        const element = this.top[i];
        if (element.is_moderator === 'true') {
          this.moderators.push(element);
        }
      }

      // this.allmoderators = this.moderators.slice(0, 5);
      // alert(this.moderators.length)
      this.modLength = this.moderators.length;
      // console.log('active mods', this.moderators);
    }
  }

  speakerWithMod() {
    this.modSpeaker = [];
    // this.followedBySpeaker = [];
    this.othersInRoom = [];
    for (let i = 0; i < this.top.length; i++) {
      const element = this.top[i];
      if (element.is_speaker === 'true') {
        this.modSpeaker.push(element);
      } else {
        this.othersInRoom.push(element);
      }
    }
    // console.log('all users', this.top);
    // console.log('speaker', this.modSpeaker);
    // console.log('followed by speaker', this.followedBySpeaker);
    // console.log('Others in room', this.othersInRoom);
  }

  checkIfMod(username: string) {
    for (let i = 0; i < this.moderators.length; i++) {
      const element = this.moderators[i];
      if (String(element.username) === username) {
        // console.log(username);
        return true;
      } else {
        return false;
      }
    }
    // for (const i of this.moderators) {
    //   if (i.username === username) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
  }

  selectFilter(ev) {
    this.showDisplay = '';
    // console.log(ev);
    this.showDisplay = ev;
  }
  orderBy(ev) {
    console.log(ev);
    this.sortKey = '';
    this.sortKey = String(ev);
  }

  clearFilter() {
    this.sortKey = '';
    this.showonlyone = false;
    // console.log(this.showonlyone);
  }

  pickRandom() {
    this.showonlyone = true;
    this.randomElement =
      this.othersInRoom[Math.floor(Math.random() * this.othersInRoom.length)];
    // console.log(this.randomElement);
  }

  gotoUser(userid) {
    console.log(userid);
    this.router.navigateByUrl('/tabs/grtools/profile/' + userid);
  }

  convert(value: number) {
    const data: any = moment.duration(value, 'minutes');
    // console.log(data._data);
    return (
      String(data._data.hours).padStart(2, '0') +
      ':' +
      String(data._data.minutes).padStart(2, '0')
    );
  }
}
