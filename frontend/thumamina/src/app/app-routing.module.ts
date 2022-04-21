import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';

import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RunnerHomeComponent } from './components/runner-home/runner-home.component';
import { ErrandsComponent } from './components/errands/errands.component';


import { TrackComponent } from './components/track/track.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostingComponent } from './components/posting/posting.component';
import { editProfileComponent } from './components/edit-profile/edit-profile.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { RequestsComponent } from './components/requests/requests.component';
import { RateComponent } from './components/rate/rate.component';


const routes: Routes = [{
  path:'',component:LandingComponent
},
{path:'track',component:TrackComponent},
{path:'posting',component:PostingComponent},
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
{path:'edit', component:editProfileComponent},
{path:'jobs', component:JobsComponent},

{path: 'requests', component: RequestsComponent},
{path: 'rate', component: RateComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
