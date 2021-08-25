import { ClubDetailsComponent } from './club-details/club-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportPage } from './support.page';

const routes: Routes = [
  {
    path: '',
    component: SupportPage,
  },
  {
    path: 'club/:id',
    component: ClubDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportPageRoutingModule {}
