import { Cerveja } from './../../model/cerveja';
import { BeerService } from './../../services/beer.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BeerListComponent implements OnInit {
  beers!: Cerveja[];

  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
    this.getListaCerveja();
  }

  getListaCerveja() {
    this.beerService
      .getListaCervejas()
      .subscribe((beers: Cerveja[]) => {
        this.beers = beers;
      })
  }
}
