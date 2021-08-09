import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountStatPageRoutingModule } from './account-stat-routing.module';

import { AccountStatPage } from './account-stat.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountStatPageRoutingModule,
    OrderModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  declarations: [AccountStatPage]
})
export class AccountStatPageModule {}
