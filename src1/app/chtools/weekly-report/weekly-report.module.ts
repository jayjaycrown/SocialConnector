import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeeklyReportPageRoutingModule } from './weekly-report-routing.module';

import { WeeklyReportPage } from './weekly-report.page';

import { File } from '@ionic-native/file/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeeklyReportPageRoutingModule
  ],
  providers: [File, SocialSharing],
  declarations: [WeeklyReportPage]
})
export class WeeklyReportPageModule {}
