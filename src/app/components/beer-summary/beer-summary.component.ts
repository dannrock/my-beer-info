import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Cerveja } from 'src/app/model/cerveja';
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
    this.beerService
      .getListaCervejas()
      .subscribe((beers: Cerveja[]) => {
        this.qtdCervejas = beers.length;
      })
  }
}
