import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerJobComponent } from './manager-job.component';
import { ManagerDashboardManageCandidateComponent } from './manager-dashboard-manage-candidate/manager-dashboard-manage-candidate.component';
import { ManagerDashboardManageJobComponent } from './manager-dashboard-manage-job/manager-dashboard-manage-job.component';
import { ManagerDashboardPostJobComponent } from './manager-dashboard-post-job/manager-dashboard-post-job.component';


const routes: Routes = [{ path: '', component: ManagerJobComponent }
,{
  path: '',
  component: ManagerJobComponent,
  children: [
    {
      path: 'manage',
      component: ManagerDashboardManageCandidateComponent,

    },
    {
      path: 'list',
      component: ManagerDashboardManageJobComponent,

    }
    ,
    {
      path: 'post',
      component: ManagerDashboardPostJobComponent,

    }
  
  ]
    
        
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerJobRoutingModule { }
