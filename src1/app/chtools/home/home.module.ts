import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ClubDetailsComponent } from '../club-analytics/club-details/club-details.component';
import { TrackDetailsComponent } from '../track/track-details/track-details.component';
// import { AnnouncementsPage } from '../announcements/announcements.page';
import { VerifyClubComponent } from '../club-analytics/verify-club/verify-club.component';
import { ChartsModule } from 'ng2-charts';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { NgxStripeModule } from 'ngx-stripe';
import { File } from '@ionic-native/file/ngx';
// import { HTTP } from '@ionic-native/http/ngx';
// import { FileOpener } from "@ionic-native/file-opener/ngx";
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ChartsModule,
    OrderModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
    // NgxStripeModule.forRoot('pk_live_X0yHCliG01VXZYUlqsD2D88W00vkCJ4P5g'),
  ],
  providers: [File, SocialSharing],
  declarations: [HomePage, ClubDetailsComponent, TrackDetailsComponent, VerifyClubComponent]
})
export class HomePageModule {}
