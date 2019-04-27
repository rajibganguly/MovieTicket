import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-final-results',
  templateUrl: './final-results.component.html',
  styleUrls: ['./final-results.component.css']
})
export class FinalResultsComponent implements OnInit, OnDestroy {

  constructor() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('finalresult');
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('finalresult');
  }


}
