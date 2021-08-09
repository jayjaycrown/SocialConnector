import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeeklyComparisonPageRoutingModule } from './weekly-comparison-routing.module';

import { WeeklyComparisonPage } from './weekly-comparison.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeeklyComparisonPageRoutingModule
  ],
  declarations: [WeeklyComparisonPage]
})
export class WeeklyComparisonPageModule {}
