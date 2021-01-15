import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./shared/login/login.component";
import { RegisterComponent } from "./shared/register/register.component";
import { HomeComponent } from "./shared/home/home.component";
import { CandidateComponent } from "./candidate/candidate.component";
import { DefaultLayoutComponent } from "./shared/default-layout/default-layout.component";
import { AboutUsComponent } from "./shared/about-us/about-us.component";
import { ContactComponent } from "./shared/contact/contact.component";
import { TermsAndConditionComponent } from "./shared/terms-and-condition/terms-and-condition.component";
import { Page404Component } from "./shared/page404/page404.component";
import { HowItWorkComponent } from "./shared/how-it-work/how-it-work.component";
import { FaqComponent } from "./shared/faq/faq.component";
import { PricingComponent } from "./shared/pricing/pricing.component";

/* 
routerLink=""

{ path: routerLink="/candidate/profil/edit",component: EditComponent},
 { path: routerLink="/candidate/profil/edit-resume",component: EditResumeComponent},
{ path: routerLink="/candidate/profil/resume",component: ResumeComponent},


 { path: routerLink="/candidate/dashboard/alert",component: AlertComponent},
{ path: routerLink="/candidate/dashboard/applied",component: AppliedComponent},
{ path: routerLink="/candidate/dashboard/bookmark",component: BookmarkComponent},
 routerLink="/candidate/dashboard/"component: DashboardComponent},
routerLink="/candidate/dashboard/message",component: MessageComponent},
routerLink="/candidate/dashboard/pricing",component: PricingComponent},

routerLink="/candidates/add", component: AddResumeComponent },
routerLink="/candidates/details", component: CandidateDetailsComponent },
routerLink="/candidates/list", component: CandidatesListComponent }

routerLink="/manager/dashboard/message",component: ManagerDashboardMessageComponent},
routerLink="/manager/dashboard/pricing",component: ManagerDashboardPricingComponent},
routerLink="/manager/dashboard/job/list",      component: ManagerDashboardManageJobComponent,  }
routerLink="/manager/dashboard/job/post", 

 { path: '/manager/profil/edit',component: ManagerEditProfileComponent},
  { path: '/manager/profil/manage-candidate',component: ManagerDashboardManageCandidateComponent},


  jobs

routerLink="/jobs/list", component: JobListingComponent },
routerLink="/jobs/details", component: JobDetailsComponent },
routerLink="/jobs/post", component: PostJobComponent }

{ path: '/payment/invoice',component: InvoiceComponent},
  { path: '/payment/payment-complete',component: PaymentCompleteComponent},
  { path: '/payment/checkout', component: CheckoutComponent },

     routerLink="about"
        data: {
          title: 'Page 404'
        },
        component: AboutUsComponent,

      },
      {
   routerLink="contact"     path: 'contact',
        component: ContactComponent,
      }
      ,
      {
        routerLink="faq"   path: '',
        component: FaqComponent,
      },
      {
       routerLink="how-work"  path: '',
        component: HowItWorkComponent,
      },
      {
       routerLink="404"  path: '',
        component: Page404Component,
      }
      ,
      {
       routerLink="condition"   path: '',
        component: TermsAndConditionComponent,
      },
      {
        path: '**',
     



*/
const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "",
    component: DefaultLayoutComponent,
    children: [
      {
        path: "candidate",
        loadChildren: () =>
          import("./candidate/candidate.module").then(m => m.CandidateModule)
      },
      {
        path: "manager",
        loadChildren: () =>
          import("./manager/manager.module").then(m => m.ManagerModule)
      },
      {
        path: "managers",
        loadChildren: () =>
          import("./managers/managers.module").then(m => m.ManagersModule)
      },
      {
        path: "jobs",
        loadChildren: () => import("./jobs/jobs.module").then(m => m.JobsModule)
      },
      {
        path: "candidates",
        loadChildren: () =>
          import("./candidates/candidates.module").then(m => m.CandidatesModule)
      },
      {
        path: "payment",
        loadChildren: () =>
          import("./payment/payment.module").then(m => m.PaymentModule)
      },

      {
        path: "about",
        data: {
          title: "Page 404"
        },
        component: AboutUsComponent
      },
      {
        path: "contact",
        component: ContactComponent
      },
      {
        path: "faq",
        component: FaqComponent
      },
      {
        path: "how-work",
        component: HowItWorkComponent
      },
      {
        path: "404",
        component: Page404Component
      },
      {
        path: "condition",
        component: TermsAndConditionComponent
      },
      {
        path: "pricing",
        component: PricingComponent
      },
      {
        path: "**",
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
