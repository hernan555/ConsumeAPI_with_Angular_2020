import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [
  {path: 'contact',component: ContactComponent},
  {path: '',redirectTo: '/home',pathMatch:'full'},
  {path: 'home',component: HomeComponent},
  {path: 'us',component: AboutUsComponent},
  {path: 'team/:id',component: TeamComponent},
  {path: '**',redirectTo: '/home',pathMatch:'full'}//si escriben cualquier cosa en la url redirecciona a inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
