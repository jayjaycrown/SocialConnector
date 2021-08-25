import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClubComparisonPage } from './club-comparison.page';

const routes: Routes = [
  {
    path: '',
    component: ClubComparisonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubComparisonPageRoutingModule {}
