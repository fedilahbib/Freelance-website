import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { HomeComponent } from './shared/home/home.component';
import { CandidateComponent } from './candidate/candidate.component';
import { ManagerJobModule } from './manager/manager-dashboard/manager-job/manager-job.module';
import { DefaultLayoutComponent } from './shared/default-layout/default-layout.component';
import { Page404Component } from './shared/page404/page404.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { ContactComponent } from './shared/contact/contact.component';
import { FaqComponent } from './shared/faq/faq.component';
import { HowItWorkComponent } from './shared/how-it-work/how-it-work.component';
import { TermsAndConditionComponent } from './shared/terms-and-condition/terms-and-condition.component';
import { IconsModule } from './shared/icons/icons.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlModule } from 'ngx-owl-carousel';

import { CountToModule } from 'angular-count-to';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PricingComponent } from './shared/pricing/pricing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFormComponent } from './shared/search-form/search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DefaultLayoutComponent,
    Page404Component,
    AboutUsComponent,
    ContactComponent,
    FaqComponent,
    HowItWorkComponent,
    TermsAndConditionComponent,
    PricingComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ManagerJobModule,
    IconsModule,
    MatInputModule, MatButtonModule, MatSelectModule, MatIconModule
    , AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    OwlModule,
    CountToModule,
    SlickCarouselModule,
    ReactiveFormsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
