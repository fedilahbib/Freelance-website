import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerDetailsComponent } from './manager-details/manager-details.component';
import { ManagerListingComponent } from './manager-listing/manager-listing.component';


const routes: Routes = [

  { path: 'details',component: ManagerDetailsComponent},
  { path: 'listing',component: ManagerListingComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagersRoutingModule { }
