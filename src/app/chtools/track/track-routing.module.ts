import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackPage } from './track.page';
// import { TrackDetailsComponent } from './track-details/track-details.component';

const routes: Routes = [
  {
    path: '',
    component: TrackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackPageRoutingModule {}
