import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerDashboardRoutingModule } from './manager-dashboard-routing.module';

import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { ManagerDashboardMessageComponent } from './manager-dashboard-message/manager-dashboard-message.component';
import { ManagerDashboardPricingComponent } from './manager-dashboard-pricing/manager-dashboard-pricing.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ManagerDashboardComponent,ManagerDashboardMessageComponent,ManagerDashboardPricingComponent],
  imports: [
    CommonModule,
    ManagerDashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class ManagerDashboardModule { }
