import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { ManagerDashboardMessageComponent } from './manager-dashboard-message/manager-dashboard-message.component';
import { ManagerDashboardPricingComponent } from './manager-dashboard-pricing/manager-dashboard-pricing.component';


const routes: Routes = [

  { path: '',component: ManagerDashboardComponent},
  { path: 'message',component: ManagerDashboardMessageComponent},
  { path: 'pricing',component: ManagerDashboardPricingComponent},
  { path: 'job', loadChildren: () => import('./manager-job/manager-job.module').then(m => m.ManagerJobModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerDashboardRoutingModule { }
