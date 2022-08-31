import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-beer-summary',
  templateUrl: './beer-summary.component.html',
  styleUrls: ['./beer-summary.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BeerSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
