import { BeerRegistrationComponent } from './components/beer-registration/beer-registration.component';
import { BeerSummaryComponent } from './components/beer-summary/beer-summary.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'forgot',
    component: ForgotComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent,
  },
  {
    path: 'beerlist',
    component: BeerListComponent,
  },
  {
    path: 'beersummary',
    component: BeerSummaryComponent,
  },
  {
    path: 'beerregistration',
    component: BeerRegistrationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
