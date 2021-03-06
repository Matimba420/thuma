import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { AddErrandsComponent } from './components/add-errands/add-errands.component';

import { DashboardComponent } from './components/dashboard/client/dashboard.component';

import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RunnerHomeComponent } from './components/runner-home/runner-home.component';
import { ErrandsComponent } from './components/errands/errands.component';


import { TrackComponent } from './components/track/track.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostingComponent } from './components/posting/posting.component';
import { RunnerComponent } from './components/runner/runner.component';
import { DashComponent } from './components/dash/dash.component';
import { SuccessMassageComponent } from './components/success-massage/success-massage.component';
//import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { editProfileComponent } from './components/edit-profile/edit-profile.component';
import { RunnerReqComponent } from './components/runner-req/runner-req.component';
import { EarningsComponent } from './components/earnings/earnings.component';
import { ViewComponent } from './components/view/view.component';

import { RatingsComponent } from './components/ratings/ratings.component';
import { FooterComponent } from './components/footer/footer.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { RequestsComponent } from './components/requests/requests.component';
import { RateComponent } from './components/rate/rate.component';
import { RunnerProfileComponent } from './components/runner-profile/runner-profile.component';
import { HistoryComponent } from './components/history/history.component';
import { UpdateErrandComponent } from './components/update-errand/update-errand.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { SettingsComponent } from './components/settings/settings.component';
import { GetErrandsComponent } from './get-errands/get-errands.component';
import { RunViewComponent } from './components/run-view/run-view.component';
import { ClientViewComponent } from './components/client-view/client-view.component';


const routes: Routes = [{
  path:'',component:LandingComponent
},
{path:'track',component:TrackComponent},
{path:'posting',component:PostingComponent},
{path:'success',component:SuccessMassageComponent},
{path:'add',component:AddErrandsComponent},
{path:'update',component:UpdateErrandComponent},

{
  path:'land',component:LandingComponent
},
{path:'create',component:LoginComponent},
{path:'log',component:CreateComponent},
{path:'posting',component:PostingComponent},

{path:'run_home', component:RunnerHomeComponent},
{path:'dash',component:DashboardComponent},
{path:'run_home', component:RunnerHomeComponent},
{path:'errands', component:ErrandsComponent},
{path:'profile', component:ProfileComponent},
{path:'runn',component:RunnerComponent},
{path:'dashPage',component:DashComponent},
 //{path:'edit', component:EditProfileComponent};
{path:'edit', component:editProfileComponent},
{path:'req',component:RunnerReqComponent},
{path:'ratings', component:RatingsComponent},
{path:'footer', component:FooterComponent},
{path:'jobs', component:JobsComponent},
{path:'earnings', component:EarningsComponent},
{path:'availableErrands',component:GetErrandsComponent},

{path: 'requests', component: RequestsComponent},
{path: 'rate', component: RateComponent},
{path:'run_p',component:RunnerProfileComponent},
{path:'history',component:HistoryComponent},
{path:'payment',component:PaymentsComponent},
{path:'settings',component:SettingsComponent},
{path: 'runView', component:RunViewComponent},
{path:'clientView', component:ClientViewComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
