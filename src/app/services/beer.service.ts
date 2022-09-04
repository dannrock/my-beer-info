import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor() { }

  registrarCerveja(beer: any) {
    let beers = this.getListaCerveja();
    if(beers === null) {
      beers = [];
    }

    beers.push(beer);

    localStorage.setItem('beers', JSON.stringify(beers));
  }

  getListaCerveja() {
    return JSON.parse(localStorage.getItem('beers') as string);
  }

  getCervejaId(id: number) {
    const beers = this.getListaCerveja();

    return beers.find((beer: any) => beer.id === id);
  }
}
