import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { InAppBrowser } from '@ionic-native/in-app-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { IonicModule } from '@ionic/angular';

import { TrackPageRoutingModule } from './track-routing.module';
import { ChartsModule } from 'ng2-charts';
// import { File } from '@ionic-native/file/ngx';
// import { HTTP } from '@ionic-native/http/ngx';
import { TrackPage } from './track.page';
// import { TrackDetailsComponent } from "./track-details/track-details.component";
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
// import { TrackDetailsComponent } from './track-details/track-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrackPageRoutingModule,
    ChartsModule,
  ],
  declarations: [TrackPage],
  providers: [InAppBrowser],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class TrackPageModule {}
