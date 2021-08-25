import { Router } from '@angular/router';
/* eslint-disable @typescript-eslint/naming-convention */
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { LoadingController, ToastController } from '@ionic/angular';
import { AppService } from 'src/app/_services/app.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-club-details',
  templateUrl: './club-details.component.html',
  styleUrls: ['./club-details.component.scss'],
})
export class ClubDetailsComponent implements OnInit {
  newDate: string;
  api_token: any;
  id: string;
  item: any = {};
  showData = false;
  stats: any[];
  newMember: number[] = [];
  newFollower: number[] = [];
  dateEntered: any[] = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };

  public barChartLabels: Label[] = this.dateEntered;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: this.newMember, label: 'New Members' },
    // { data: this.newFollower, label: 'New Followers' },
  ];
  results: any = {};
  durationDays: string;

  constructor(
    private route: ActivatedRoute,
    private app: AppService,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private router: Router
  ) {}

  async ngOnInit() {
    this.newDate = moment().format('YYYY-MM-DD');
    const user: any = await JSON.parse(localStorage.getItem('user'));
    const result = user.result;
    this.api_token = result.api_token;
    this.route.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('id');
    });
    this.getClubDetails();
    this.clubAnalytics();
  }

  async getClubDetails() {
    const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading',
    });
    await loading.present();
    this.app
      .myClubDetails(this.api_token, this.id)
      .subscribe(async (res: any) => {
        this.newMember.length = 0;
        this.newFollower.length = 0;
        this.dateEntered.length = 0;
        await loading.dismiss();
        console.log(res);
        if (res.status === 'success') {
          this.showData = true;
          this.item = res.result.club;

          const data: any[] = res.result.stats;
          this.stats = data.slice(Math.max(data.length - 10, 0));
          // console.log(this.stats);
          for (const x of this.stats) {
            const date_entered = x.date_entered;
            const newFollowers = parseFloat(x.new);
            const new_members = parseFloat(x.new_members);
            this.newMember.push(new_members);
            this.newFollower.push(newFollowers);
            this.dateEntered.push(date_entered);
          }
          console.log(this.dateEntered);
          console.log(this.newFollower);
          console.log(this.newMember);
        } else {
        }
      });
  }

  async clubAnalytics() {
    this.app
      .clubAnalytics(this.api_token, this.id, this.newDate)
      .subscribe(async (res: any) => {
        if (res.status === 'success') {
          this.results = res.result;
        } else if (res.status === 'upgrade') {
          // this.alertService.danger(res.message);
          const color = 'danger';
          this.presentToast(color, res.message);
          this.router.navigateByUrl('/tabs/upgrade');
        } else {
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
  getDateDiff(now, end) {
    const data = now.split();
    const testing = data[0].replace(/-/g, '/');
    const data2 = end.split();
    const testing2 = data2[0].replace(/-/g, '/');
    // const datta2 = dattta[0].replace(/T/g, ' ');
    const duration = moment(testing2, 'YYYY/MM/DD HH:mm:ss').diff(
      moment(testing, 'YYYY/MM/DD HH:mm:ss')
    );
    // const days = duration.asHours();
    const secssss = moment.duration(duration).seconds();
    const minsss = moment.duration(duration).minutes();
    const hrsss = Math.trunc(moment.duration(duration).asHours());
    this.durationDays = hrsss + ':' + minsss + ':' + secssss;
    // console.log(this.durationDays);
    return this.durationDays;
  }

  onClick(channel) {
    this.router.navigateByUrl('/tabs/chtools/track/' + channel);
  }

  public randomize(): void {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }

  async presentToast(color, message) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 3000,
    });
    toast.present();
  }
}
