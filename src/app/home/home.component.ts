import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Http, HttpModule } from '@angular/http';

import { MainService } from './../main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  thetre: any[];
  currentTime: string;
  showTime = '2:30' ;

  constructor(private service: MainService, private router: Router, private http: Http) {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('home');
  }

  ngOnInit() {
    return this.service.auditoNumService().subscribe(
      (data) => {
        this.thetre = data.json();
      });

  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('home');
  }

  showBookings = (evt) => {
    this.service.setUserInfo(evt.target.id);
    this.service.setUserInfo(evt.target.name);
    this.router.navigate(['/booking']);
  }

  showBookingsOver(evt) {
    alert('THIS SHOWS IS HOUSEFUL');
  }

}
