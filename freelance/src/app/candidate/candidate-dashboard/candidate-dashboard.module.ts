import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateDashboardRoutingModule } from './candidate-dashboard-routing.module';
import { AlertComponent } from './alert/alert.component';
import { AppliedComponent } from './applied/applied.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessageComponent } from './message/message.component';
import { PricingComponent } from './pricing/pricing.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AlertComponent,AppliedComponent,BookmarkComponent,DashboardComponent,MessageComponent,PricingComponent],
  imports: [
    CommonModule,
    CandidateDashboardRoutingModule,
    ReactiveFormsModule    

  ]
})
export class CandidateDashboardModule { }
