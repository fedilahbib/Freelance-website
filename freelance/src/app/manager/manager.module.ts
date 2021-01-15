import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ManagerComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    ReactiveFormsModule
  ]
})
export class ManagerModule { }
