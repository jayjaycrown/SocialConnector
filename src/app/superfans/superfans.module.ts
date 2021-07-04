import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperfansPageRoutingModule } from './superfans-routing.module';

import { SuperfansPage } from './superfans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperfansPageRoutingModule
  ],
  declarations: [SuperfansPage]
})
export class SuperfansPageModule {}
