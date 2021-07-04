import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountStatPage } from './account-stat.page';

const routes: Routes = [
  {
    path: '',
    component: AccountStatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountStatPageRoutingModule {}
