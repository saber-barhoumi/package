import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PointsManagementComponent } from './components/points-management/points-management.component';
import { RewardsManagementComponent } from './components/rewards-management/rewards-management.component';
import { MarketingCampaignsComponent } from './components/marketing-campaigns/marketing-campaigns.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';

const routes: Routes = [
  { path: 'points-management', component: PointsManagementComponent },
  { path: 'rewards-management', component: RewardsManagementComponent },
  { path: 'marketing-campaigns', component: MarketingCampaignsComponent },
  { path: 'analytics', component: AnalyticsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoyaltyCardRoutingModule { }
