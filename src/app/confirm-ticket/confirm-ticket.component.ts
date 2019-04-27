import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from './../main.service';

@Component({
  selector: 'app-confirm-ticket',
  templateUrl: './confirm-ticket.component.html',
  styleUrls: ['./confirm-ticket.component.css']
})
export class ConfirmTicketComponent implements OnInit, OnDestroy {
  confirmDetailsData: any[] = [];
  audiName: object;
  movieName: object;
  imagePath = '../../assets/img/movie-details/ + this.movieName + .jpg';
  confirmSeats: any[] = [];
  confirmSeatType: string;

  movieSeatPrice = 560;
  movieSeatPriceServiceTax = Math.round(this.movieSeatPrice * 14 / 100);
  movieSeatPriceSwatBharatCess = this.movieSeatPriceServiceTax * 0.5 / 100;
  subTotal = this.movieSeatPrice + this.movieSeatPriceServiceTax + this.movieSeatPriceSwatBharatCess + this.movieSeatPriceSwatBharatCess;
  subTotalAll: string;

  constructor(public service: MainService, private router: Router) {

    const body = document.getElementsByTagName('body')[0];
    body.classList.add('confirm');

    this.audiName = this.service.getUserInfo()[0];
    this.movieName = this.service.getUserInfo()[1];
    const seatDetails = this.service.getUserInfo()[2];
    seatDetails.forEach(element => {
if (typeof element === 'number') {
  // console.log('This is ID', element);
} else if (typeof element === 'string') {
  if (element.substring(0, 1) === 'A') {
    this.confirmSeats.push(element);
    console.log(this.confirmSeats);
  } else if (element.substring(0, 1) === 'B') {
    this.confirmSeats.push(element);
    console.log(this.confirmSeats);
  } else if (element.substring(0, 1) === 'C') {
    this.confirmSeats.push(element);
    console.log(this.confirmSeats);
  } else if (element === 'silver') {
    this.confirmSeatType = element;
    console.log(this.confirmSeatType);
  } else if (element === 'gold') {
    this.confirmSeatType = element;
  } else if (element === 'platinum') {
    this.confirmSeatType = element;
  }

}
    });

    if (this.confirmSeats.length > 0) {
      const seat = this.confirmSeats.length;
      const localAmont = this.subTotal * seat;
      this.subTotalAll = localAmont.toFixed(2);
    }
  }

  ngOnInit() {
    return this.service.totalSeatService().subscribe(
      (data) => {
        this.confirmDetailsData.push(data.json());
      }
    );


  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('confirm');
  }




  confirmTicket() {
    this.router.navigate(['/result']);
  }

}
