import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeeklyComparisonPage } from './weekly-comparison.page';

const routes: Routes = [
  {
    path: '',
    component: WeeklyComparisonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeeklyComparisonPageRoutingModule {}
