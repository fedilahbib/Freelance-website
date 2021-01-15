import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerEditProfileComponent } from './manager-edit-profile/manager-edit-profile.component';
import { ManagerManageCandidateComponent } from './manager-manage-candidate/manager-manage-candidate.component';

const routes: Routes = [

 
  { path: 'edit',component: ManagerEditProfileComponent},
  { path: 'manage-candidate',component: ManagerManageCandidateComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerProfileRoutingModule { }
