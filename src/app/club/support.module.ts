import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChartsModule } from 'ng2-charts';

import { SupportPageRoutingModule } from './support-routing.module';
import { ClubDetailsComponent } from './club-details/club-details.component';

import { SupportPage } from './support.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportPageRoutingModule,
    ChartsModule,
  ],
  declarations: [SupportPage, ClubDetailsComponent],
})
export class SupportPageModule {}
