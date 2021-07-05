import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(
            (m) => m.DashboardPageModule
          ),
      },
      {
        path: 'superfans',
        loadChildren: () =>
          import('../superfans/superfans.module').then(
            (m) => m.SuperfansPageModule
          ),
      },
      {
        path: 'toprooms',
        loadChildren: () =>
          import('../toprooms/toprooms.module').then(
            (m) => m.ToproomsPageModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../profile/profile.module').then((m) => m.ProfilePageModule),
      },
      {
        path: 'support',
        loadChildren: () =>
          import('../support/support.module').then((m) => m.SupportPageModule),
      },
      // {
      //   path: 'tab1',
      //   loadChildren: () =>
      //     import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
      // },
      // {
      //   path: 'tab2',
      //   loadChildren: () =>
      //     import('../tab2/tab2.module').then((m) => m.Tab2PageModule),
      // },
      // {
      //   path: 'tab3',
      //   loadChildren: () =>
      //     import('../tab3/tab3.module').then((m) => m.Tab3PageModule),
      // },
      {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full',
      },
      // {
      //   path: '**',
      //   redirectTo: '/tabs/dashboard',
      // },
    ],
  },

  {
    path: 'chtools',
    loadChildren: () =>
      import('../chtools/home/home.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: 'grtools',
    loadChildren: () =>
      import('../grtools/home/home.module').then(
        (m) => m.HomePageModule
      ),
  },

  // {
  //   path: '',
  //   redirectTo: '/tabs/dashboard',
  //   pathMatch: 'full',
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
