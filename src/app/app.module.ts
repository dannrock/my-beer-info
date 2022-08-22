import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCervejaComponent } from './lista-cerveja/lista-cerveja.component';
import { ResumoCervejaComponent } from './resumo-cerveja/resumo-cerveja.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCervejaComponent,
    ResumoCervejaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
