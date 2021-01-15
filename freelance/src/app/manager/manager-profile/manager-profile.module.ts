import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ManagerEditProfileComponent } from './manager-edit-profile/manager-edit-profile.component';
import { ManagerManageCandidateComponent } from './manager-manage-candidate/manager-manage-candidate.component';
import { ManagerProfileRoutingModule } from './manager-profile-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ManagerEditProfileComponent, ManagerManageCandidateComponent],
  imports: [
    CommonModule,
    ManagerProfileRoutingModule,
    ReactiveFormsModule
  ]
})
export class ManagerProfileModule { 



  
}

