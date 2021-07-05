import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomHistoryPageRoutingModule } from './room-history-routing.module';

import { RoomHistoryPage } from './room-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomHistoryPageRoutingModule
  ],
  declarations: [RoomHistoryPage]
})
export class RoomHistoryPageModule {}
