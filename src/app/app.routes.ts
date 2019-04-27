import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { ConfirmTicketComponent } from './confirm-ticket/confirm-ticket.component';
import { FinalResultsComponent } from './final-results/final-results.component';

const AppRouter: Routes = [
    { path: '', component: HomeComponent },
    { path: 'booking', component: BookticketComponent },
    { path: 'confirm', component: ConfirmTicketComponent },
    { path: 'result', component: FinalResultsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(AppRouter)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
