import { Component } from '@angular/core';
import { HomeComponent } from './../app/home/home.component';
import { BookticketComponent } from './../app/bookticket/bookticket.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movieticket-app';
}
