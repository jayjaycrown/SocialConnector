import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ChartsModule } from 'ng2-charts';

import { ToproomsPageRoutingModule } from './toprooms-routing.module';

import { ToproomsPage } from './toprooms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToproomsPageRoutingModule,
    ChartsModule,
  ],
  declarations: [ToproomsPage],
})
export class ToproomsPageModule {}
