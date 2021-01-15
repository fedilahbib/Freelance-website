import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobListingComponent } from './job-listing/job-listing.component';
import { PostJobComponent } from './post-job/post-job.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [JobDetailsComponent, JobListingComponent, PostJobComponent],
  imports: [
    CommonModule,
    JobsRoutingModule,
    ReactiveFormsModule
  ]
})
export class JobsModule { }
