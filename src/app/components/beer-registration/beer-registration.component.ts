import { BeerService } from './../../services/beer.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-beer-registration',
  templateUrl: './beer-registration.component.html',
  styleUrls: ['./beer-registration.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BeerRegistrationComponent implements OnInit {
  beer = {
    id: Math.floor((Math.random()*1000)+1),
    fabricante: null,
    marca: null,
    familia: null,
    tipo: null,
    teor: null,
    ibu: null,
    cor: null
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private beerService: BeerService) { }

  ngOnInit(): void {
    this.getCervejaId();
  }

  salvar() {
    this.beerService.registrarCerveja(this.beer);

    this.router.navigate(['/beerlist']);
  }

  getCervejaId() {
    const id = this.route.snapshot.queryParams['id'];
    this.beer = this.beerService.getCervejaId(Number(id));
  }

}
