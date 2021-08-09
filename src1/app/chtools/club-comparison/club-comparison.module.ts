import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubComparisonPageRoutingModule } from './club-comparison-routing.module';

import { ClubComparisonPage } from './club-comparison.page';
import { AreaModalComponent } from '../../_helpers/area-modal/area-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClubComparisonPageRoutingModule
  ],
  declarations: [ClubComparisonPage, AreaModalComponent]
})
export class ClubComparisonPageModule {}
