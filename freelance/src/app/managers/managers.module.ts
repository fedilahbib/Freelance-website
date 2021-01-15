import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagersRoutingModule } from './managers-routing.module';

import { ManagerListingComponent } from './manager-listing/manager-listing.component';
import { ManagerDetailsComponent } from './manager-details/manager-details.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ManagerListingComponent, ManagerDetailsComponent],
  imports: [
    CommonModule,
    ManagersRoutingModule,
    ReactiveFormsModule

  ]
})
export class ManagersModule { }
