import { GrValidateComponent } from './gr-validate/gr-validate.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { ValidateComponent } from './validate/validate.component';
import { NgxCaptchaModule } from 'ngx-captcha';

import { AuthPage } from './auth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AuthPageRoutingModule,
    NgxCaptchaModule
  ],
  declarations: [AuthPage, RegisterComponent, ValidateComponent, GrValidateComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AuthPageModule {}
