import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CandidateProfilRoutingModule } from "./candidate-profil-routing.module";
import { EditComponent } from "./edit/edit.component";
import { EditResumeComponent } from "./edit-resume/edit-resume.component";
import { ResumeComponent } from "./resume/resume.component";
import { ReactiveFormsModule } from "@angular/forms";
import { EducationModalComponent } from "./edit-resume/education-modal/education-modal.component";
import { ExperienceModalComponent } from "./edit-resume/experience-modal/experience-modal.component";
import { SkillModalComponent } from "./edit-resume/skill-modal/skill-modal.component";
import { SocialModalComponent } from "./edit-resume/social-modal/social-modal.component";
import { AboutModalComponent } from "./edit-resume/about-modal/about-modal.component";
import { FadeModalComponent } from "./edit-resume/fade-modal/fade-modal.component";
import { PortfolioModalComponent } from "./edit-resume/portfolio-modal/portfolio-modal.component";
import { PresonalDetailsModalComponent } from "./edit-resume/presonal-details-modal/presonal-details-modal.component";
import { ProSkillModalComponent } from "./edit-resume/pro-skill-modal/pro-skill-modal.component";
import { QualificationModalComponent } from "./edit-resume/qualification-modal/qualification-modal.component";

@NgModule({
  declarations: [
    EditComponent,
    EditResumeComponent,
    ResumeComponent,
    EducationModalComponent,
    ExperienceModalComponent,
    SkillModalComponent,
    SocialModalComponent,
    AboutModalComponent,
    FadeModalComponent,
    PortfolioModalComponent,
    PresonalDetailsModalComponent,
    ProSkillModalComponent,
    QualificationModalComponent
  ],
  imports: [CommonModule, CandidateProfilRoutingModule, ReactiveFormsModule]
})
export class CandidateProfilModule {}
