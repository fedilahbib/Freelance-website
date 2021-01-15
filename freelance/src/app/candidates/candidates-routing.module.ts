import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddResumeComponent } from './add-resume/add-resume.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';

const routes: Routes = [
  
  { path: 'add', component: AddResumeComponent },
  { path: 'details', component: CandidateDetailsComponent },
  { path: 'list', component: CandidatesListComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatesRoutingModule { }
