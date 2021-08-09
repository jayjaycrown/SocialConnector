import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClubAnalyticsPage } from './club-analytics.page';
import { ClubDetailsComponent } from './club-details/club-details.component';

const routes: Routes = [
  {
    path: '',
    component: ClubAnalyticsPage,
    // children: [
    //   {
    //     path: '/:id',
    //     component: ClubDetailsComponent
    //   },
    //   {
    //     path: '',
    //     redirectTo: 'club-analytics',
    //     pathMatch: 'full'
    //   }
    // ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubAnalyticsPageRoutingModule {}
