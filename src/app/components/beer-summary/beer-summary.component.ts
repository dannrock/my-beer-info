import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-beer-summary',
  templateUrl: './beer-summary.component.html',
  styleUrls: ['./beer-summary.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BeerSummaryComponent implements OnInit {
  qtdCervejas!: number;

  constructor(
    private beerService: BeerService
  ) { }

  ngOnInit(): void {
    this.getTotalCervejas();
  }

  getTotalCervejas() {
    this.qtdCervejas = this.beerService.getTotalCervejas();
  }

}
