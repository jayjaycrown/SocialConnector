import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomHistoryPage } from './room-history.page';

const routes: Routes = [
  {
    path: '',
    component: RoomHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomHistoryPageRoutingModule {}
