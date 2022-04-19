import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { CreateComponent } from './components/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RunnerHomeComponent } from './components/runner-home/runner-home.component';


import { ErrandsComponent } from './components/errands/errands.component';
import { HttpClientModule } from '@angular/common/http';
import { TrackComponent } from './components/track/track.component';
import { NavComponent } from './components/nav/nav.component';


import { DashboardComponent } from './components/dashboard/dashboard.component';

import { PostingComponent } from './components/posting/posting.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SuccessMassageComponent } from './components/success-massage/success-massage.component';
import { PaymentsComponent } from './components/payments/payments.component';
// import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { editProfileComponent } from './components/edit-profile/edit-profile.component';
import { RequestsComponent } from './components/requests/requests.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    CreateComponent,
    RunnerHomeComponent,
    ErrandsComponent,
    TrackComponent,
  
  
   
    NavComponent,
   PostingComponent,
   BackButtonComponent,
   
    DashboardComponent,
  
   ProfileComponent,
      SuccessMassageComponent,
      PaymentsComponent,
      //  EditProfileComponent
   editProfileComponent,
   editProfileComponent,
   RequestsComponent
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
