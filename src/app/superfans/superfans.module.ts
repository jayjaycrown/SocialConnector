import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperfansPageRoutingModule } from './superfans-routing.module';

import { SuperfansPage } from './superfans.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperfansPageRoutingModule,
    OrderModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
  declarations: [SuperfansPage],
})
export class SuperfansPageModule {}
