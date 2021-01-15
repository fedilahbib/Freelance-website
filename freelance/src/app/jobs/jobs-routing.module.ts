import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobDetailsComponent } from './job-details/job-details.component';
import { PostJobComponent } from './post-job/post-job.component';
import { JobListingComponent } from './job-listing/job-listing.component';

const routes: Routes = [
  { path: 'list', component: JobListingComponent },
  { path: 'details', component: JobDetailsComponent },
  { path: 'post', component: PostJobComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
