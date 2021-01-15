import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CandidateRoutingModule } from "./candidate-routing.module";
import { CandidateComponent } from "./candidate.component";
import { SearchFormComponent } from "../shared/search-form/search-form.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [CandidateComponent],
  imports: [CommonModule, CandidateRoutingModule, ReactiveFormsModule]
})
export class CandidateModule {}
