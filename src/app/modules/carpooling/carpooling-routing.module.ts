// src/app/modules/carpooling/carpooling-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarpoolingOffersComponent } from './components/carpooling-offers/carpooling-offers.component';
import { CarpoolingRequestsComponent } from './components/carpooling-requests/carpooling-requests.component';
import { CarpoolingHistoryComponent } from './components/carpooling-history/carpooling-history.component';
import { CarpoolingStatisticsComponent } from './components/carpooling-statistics/carpooling-statistics.component';

const routes: Routes = [
  { path: '', redirectTo: 'offers', pathMatch: 'full' },  // Redirection par défaut
  { path: 'offers', component: CarpoolingOffersComponent },
  { path: 'requests', component: CarpoolingRequestsComponent },
  { path: 'history', component: CarpoolingHistoryComponent },
  { path: 'statistics', component: CarpoolingStatisticsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarpoolingRoutingModule { }
