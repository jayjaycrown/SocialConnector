import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubDetailsComponent } from '../club-analytics/club-details/club-details.component';
import { AuthGuard } from '../../guards/auth.guard';
import { TrackDetailsComponent } from '../track/track-details/track-details.component';
import { HomePage } from './home.page';
// import { ClubAnalyticsPageModule } from '../club-analytics/club-analytics.module';
import { VerifyClubComponent } from '../club-analytics/verify-club/verify-club.component';
const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        redirectTo: 'track',
        pathMatch: 'full',
      },
      {
        path: 'room-history',
        loadChildren: () =>
          import('../room-history/room-history.module').then(
            (m) => m.RoomHistoryPageModule
          ),
        canLoad: [AuthGuard],
      },
      {
        path: 'club-analytics',
        loadChildren: () =>
          import('../club-analytics/club-analytics.module').then(
            (m) => m.ClubAnalyticsPageModule
          ),
        canLoad: [AuthGuard],
      },
      {
        path: 'club-analytics/:id',
        component: ClubDetailsComponent,
      },
      {
        path: 'verify-club/:id',
        component: VerifyClubComponent,
      },
      {
        path: 'weekly-report',
        loadChildren: () =>
          import('../weekly-report/weekly-report.module').then(
            (m) => m.WeeklyReportPageModule
          ),
        canLoad: [AuthGuard],
      },
      {
        path: 'weekly-comparison',
        loadChildren: () =>
          import('../weekly-comparison/weekly-comparison.module').then(
            (m) => m.WeeklyComparisonPageModule
          ),
        canLoad: [AuthGuard],
      },
      {
        path: 'club-comparison',
        loadChildren: () =>
          import('../club-comparison/club-comparison.module').then(
            (m) => m.ClubComparisonPageModule
          ),
        canLoad: [AuthGuard],
      },
      // {
      //   path: 'profile',
      //   loadChildren: () =>
      //     import('../profile/profile.module').then((m) => m.ProfilePageModule),
      //   canLoad: [AuthGuard],
      // },
      {
        path: 'track',
        loadChildren: () =>
          import('../track/track.module').then((m) => m.TrackPageModule),
        canLoad: [AuthGuard],
      },
      {
        path: 'track/:id',
        component: TrackDetailsComponent,
      },
      {
        path: 'announcements',
        loadChildren: () =>
          import('../announcements/announcements.module').then(
            (m) => m.AnnouncementsPageModule
          ),
      },
      {
        path: 'details/:id',
        loadChildren: () =>
          import('../pages/details/details.module').then(
            (m) => m.DetailsPageModule
          ),
      },
      {
        path: 'account-stat',
        loadChildren: () =>
          import('../account-stat/account-stat.module').then(
            (m) => m.AccountStatPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
