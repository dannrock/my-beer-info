import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor() { }

  getListaCervejas() {
    let beers = JSON.parse(localStorage.getItem('beers') as string);

    if(beers === null) {
      beers = [];
    }
    return beers;
  }

  registrarCerveja(beer: any) {
    let beers = this.getListaCervejas();

    beers.push(beer);

    localStorage.setItem('beers', JSON.stringify(beers));
  }

  getCerveja(id: number) {
    const beers = this.getListaCervejas();

    return beers.find((beer: any) => beer.id === id);
  }

  getTotalCervejas() {
    const beers = this.getListaCervejas();

    return beers.length;
  }
}
