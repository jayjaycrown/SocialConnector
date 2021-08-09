import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubAnalyticsPageRoutingModule } from './club-analytics-routing.module';

import { ClubAnalyticsPage } from './club-analytics.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClubAnalyticsPageRoutingModule
  ],
  declarations: [ClubAnalyticsPage]
})
export class ClubAnalyticsPageModule {}
