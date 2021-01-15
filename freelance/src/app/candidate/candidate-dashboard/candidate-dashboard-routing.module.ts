import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertComponent } from './alert/alert.component';
import { AppliedComponent } from './applied/applied.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessageComponent } from './message/message.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [

  { path: 'alert',component: AlertComponent},
  { path: 'applied',component: AppliedComponent},
  { path: 'bookmark',component: BookmarkComponent},
  { path: '',component: DashboardComponent},
  { path: 'message',component: MessageComponent},
  { path: 'pricing',component: PricingComponent},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateDashboardRoutingModule { }
