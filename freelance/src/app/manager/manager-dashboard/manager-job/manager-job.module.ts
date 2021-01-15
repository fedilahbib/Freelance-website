import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerJobRoutingModule } from './manager-job-routing.module';
import { ManagerJobComponent } from './manager-job.component';
import { ManagerDashboardComponent } from '../manager-dashboard/manager-dashboard.component';
import { ManagerDashboardManageCandidateComponent } from './manager-dashboard-manage-candidate/manager-dashboard-manage-candidate.component';
import { ManagerDashboardManageJobComponent } from './manager-dashboard-manage-job/manager-dashboard-manage-job.component';
import { ManagerDashboardPostJobComponent } from './manager-dashboard-post-job/manager-dashboard-post-job.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ManagerJobComponent,ManagerDashboardManageCandidateComponent,ManagerDashboardManageJobComponent,ManagerDashboardPostJobComponent],
  imports: [
    CommonModule,
    ManagerJobRoutingModule,
    ReactiveFormsModule
  ]
})
export class ManagerJobModule { }
