import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { MainService } from './../main.service';

@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.css']
})

export class BookticketComponent implements OnInit, OnDestroy {
  allSeats: any;
  silverSeats: any[];
  goldSeats: any[];
  platinumSeats: any[];
  pageAudi: object;
  myObj: object;


  bookedDetailsArr: any[] = [];
  bookedSeats: any[] = [];

  constructor(public service: MainService, private router: Router) {
    this.pageAudi = this.service.getUserInfo()[0];
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('booking');

  }

  ngOnInit() {

    return this.service.totalSeatService().subscribe(
(data) => {
  this.allSeats = data.json();
  this.silverSeats = [];
  this.goldSeats = [];
  this.platinumSeats = [];
  this.allSeats.forEach(element => {
    if (element.type === 'silver') {
      this.silverSeats.push(element);
    } else if (element.type === 'gold') {
      this.goldSeats.push(element);
    } if (element.type === 'platinum') {
      this.platinumSeats.push(element);
    } else {
      // console.log('No Item');
    }
  });
}
    );


  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('booking');
  }



  seatDetails(rowData) {
    const localColletedInfo = {id: rowData.id, seat: rowData.seat, type: rowData.type}
    this.bookedDetailsArr.push(localColletedInfo);
    this.bookedSeats.push(rowData.seat, rowData.type, rowData.id);
  }

  nextProcess() {
    if (this.bookedSeats.length > 0) {
        this.service.postBookedTickets(this.bookedDetailsArr);
        this.service.setUserInfo(this.bookedSeats);
        this.router.navigate(['/confirm']);
      }
  }

}
