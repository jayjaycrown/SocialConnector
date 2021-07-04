import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpgradePageRoutingModule } from './upgrade-routing.module';

import { UpgradePage } from './upgrade.page';
import { NgxStripeModule } from 'ngx-stripe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpgradePageRoutingModule,
    NgxStripeModule.forRoot('pk_live_X0yHCliG01VXZYUlqsD2D88W00vkCJ4P5g'),
  ],
  declarations: [UpgradePage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class UpgradePageModule {}
