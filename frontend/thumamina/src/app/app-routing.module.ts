import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';

import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RunnerHomeComponent } from './components/runner-home/runner-home.component';
import { ErrandsComponent } from './components/errands/errands.component';


import { TrackComponent } from './components/track/track.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostingComponent } from './components/posting/posting.component';


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
{path:'run_home', component:RunnerHomeComponent},
{path:'errands', component:ErrandsComponent},
{path:'profile', component:ProfileComponent}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
