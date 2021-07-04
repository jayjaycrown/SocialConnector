import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToproomsPage } from './toprooms.page';

const routes: Routes = [
  {
    path: '',
    component: ToproomsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToproomsPageRoutingModule {}
