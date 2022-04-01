import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { ItemsComponent } from './components/items/items.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RunnerHomeComponent } from './components/runner-home/runner-home.component';


const routes: Routes = [{
  path:'',component:LandingComponent
},
{
  path:'land',component:LandingComponent
},
{path:'create',component:LoginComponent},
{path:'log',component:CreateComponent},
{path:'items',component:ItemsComponent},
{path:'run_home', component:RunnerHomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
