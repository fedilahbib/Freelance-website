import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandidateComponent } from './candidate.component';
import { CandidateModule } from './candidate.module';

const routes: Routes = [
  {
    path: 'profil',
    component: CandidateComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./candidate-profil/candidate-profil.module').then(m => m.CandidateProfilModule)
      }]
  },

  {
    path: 'dashboard',
    component: CandidateComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./candidate-dashboard/candidate-dashboard.module').then(m => m.CandidateDashboardModule)
      }
    
    ]
      
          
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
