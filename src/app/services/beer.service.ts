import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(
    private router: Router) { }

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

  excluirCerveja(id: number) {
    let beers = this.getListaCervejas();

    let beerIndex = beers.findIndex((beer: any) => beer.id === id);

    beers.splice(beerIndex, 1);

    localStorage.setItem('beers', JSON.stringify(beers));

    this.router.navigate(['/beerlist']);
  }
}
