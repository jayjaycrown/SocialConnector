import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnouncementsPageRoutingModule } from './announcements-routing.module';

import { AnnouncementsPage } from './announcements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnouncementsPageRoutingModule
  ],
  declarations: [AnnouncementsPage]
})
export class AnnouncementsPageModule {}
