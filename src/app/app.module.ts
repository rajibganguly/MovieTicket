import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routes';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { ConfirmTicketComponent } from './confirm-ticket/confirm-ticket.component';
import { FinalResultsComponent } from './final-results/final-results.component';

import { MainService } from './main.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookticketComponent,
    ConfirmTicketComponent,
    FinalResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
