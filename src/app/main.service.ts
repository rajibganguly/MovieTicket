import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

import { environment } from '../environments/environment';

@Injectable()

export class MainService {

  dataApi = environment.dataApi;
  auditoriums = environment.totalAudiApi;
  // userData = environment.userData;
  // public selectedAuditor: any;

  private componentLevelService: any[] = [];
  private componentLevelObjectService: object;


  // private header = new Headers({ 'Content-type': 'application/json' });

  constructor(private http: Http) {

  }

  auditoNumService() {
    return this.http.get(this.auditoriums);
  }

  totalSeatService() {
    return this.http.get(this.dataApi);
  }


  // selectedAuditorium(data) {
  //   console.log(data);
  //   this.componentLevelObjectService = Object.assign({}, data);
  //   console.log(this.componentLevelObjectService);
  // }

  // returnSelectedAuditorium() {
  //   return this.componentLevelObjectService;
  // }

  postBookedTickets(arr) {
    arr.forEach(element => {
      const url = this.dataApi + '/' + element.id;
      const localBook = { type:element.type, id: element.id, seat: element.seat, bookingstatus: true };
      this.http.put(`${url}`, localBook).subscribe(
        data => {
          console.log(data);
        }
      );

    });
  }

  getUserInfo() {
    return this.componentLevelService;
  }
  setUserInfo(data) {
    this.componentLevelService.push(data);
  }

  totalNewSeatBookedService(bookedstatus: any) {

    // console.log(bookedstatus);
    // console.log(this.myData);
  }



}

