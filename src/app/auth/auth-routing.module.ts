import { GrValidateComponent } from './gr-validate/gr-validate.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';
import { RegisterComponent } from './register/register.component';
import { ValidateComponent } from './validate/validate.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'validate/:id',
    component: ValidateComponent
  },
  {
    path: 'validategr/:id',
    component: GrValidateComponent
  },
  {
    path: 'login',
    component: AuthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
