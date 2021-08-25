import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpgradePage } from './upgrade.page';

const routes: Routes = [
  {
    path: '',
    component: UpgradePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpgradePageRoutingModule {}
