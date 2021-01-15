import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditComponent } from './edit/edit.component';
import { ResumeComponent } from './resume/resume.component';
import { EditResumeComponent } from './edit-resume/edit-resume.component';

const routes: Routes = [
  
  { path: 'edit',component: EditComponent},
  { path: 'edit-resume',component: EditResumeComponent},
  { path: 'resume',component: ResumeComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateProfilRoutingModule { }
