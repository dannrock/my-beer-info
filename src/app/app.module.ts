import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BeerRegistrationComponent } from './components/beer-registration/beer-registration.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { BeerSummaryComponent } from './components/beer-summary/beer-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ForgotComponent,
    RegistrationComponent,
    BeerRegistrationComponent,
    BeerListComponent,
    BeerSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
