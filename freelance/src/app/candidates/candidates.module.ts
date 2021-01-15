import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import { AddResumeComponent } from './add-resume/add-resume.component';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ AddResumeComponent, CandidatesListComponent, CandidateDetailsComponent],
  imports: [
    CommonModule,
    CandidatesRoutingModule,
    ReactiveFormsModule
  ]
})
export class CandidatesModule { }
