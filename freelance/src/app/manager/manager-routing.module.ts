import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerComponent } from './manager.component';


const routes: Routes = [
  {
    path: 'profil',
    component: ManagerComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./manager-profile/manager-profile.module').then(m => m.ManagerProfileModule)
      }]
  },

  {
    path: 'dashboard',
    component: ManagerComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./manager-dashboard/manager-dashboard.module').then(m => m.ManagerDashboardModule)
      }
    
    ]
      
          
  }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
