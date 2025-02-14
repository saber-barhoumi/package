import { Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { CarpoolingOffersComponent } from './modules/carpooling/components/carpooling-offers/carpooling-offers.component';
import { CarpoolingStatisticsComponent } from './modules/carpooling/components/carpooling-statistics/carpooling-statistics.component';
import { CarpoolingRequestsComponent } from './modules/carpooling/components/carpooling-requests/carpooling-requests.component';
import { CarpoolingHistoryComponent } from './modules/carpooling/components/carpooling-history/carpooling-history.component';


export const routes: Routes = [
  { path: 'carpooling/offers', component: CarpoolingOffersComponent },
  { path: 'carpooling/Statistics', component: CarpoolingStatisticsComponent },
  { path: 'carpooling/requests', component: CarpoolingRequestsComponent },
  { path: 'carpooling/history', component: CarpoolingHistoryComponent },
  // Other routes...
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.routes').then((m) => m.PagesRoutes),
      },
      {
        path: 'carpooling/history',
        component: CarpoolingHistoryComponent
      },
      {
        path: 'carpooling/offres',
        component: CarpoolingHistoryComponent
      },
      {
        path: 'carpooling/requests',
        component: CarpoolingHistoryComponent
      },
      {
        path: 'carpooling/statistics',
        component: CarpoolingHistoryComponent
      },  
      
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.routes').then(
            (m) => m.UiComponentsRoutes
          ),
      },
     
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.routes').then(
            (m) => m.AuthenticationRoutes
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'authentication/error',
  },
];
