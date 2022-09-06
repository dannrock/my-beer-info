import { BeerService } from './../../services/beer.service';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-beer-registration',
  templateUrl: './beer-registration.component.html',
  styleUrls: ['./beer-registration.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BeerRegistrationComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

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

  cancelar() {
    this.router.navigate(['/beerlist']);
  }

  excluir() {
    const id = this.route.snapshot.queryParams['id'];

    if(id === undefined) {
      this.form.reset();
    }
    else {
      this.beerService.excluirCerveja(id);
    }
  }

  getCervejaId() {
    const id = this.route.snapshot.queryParams['id'];

    if(id !== undefined) {
      this.beer = this.beerService.getCerveja(Number(id));
    }
  }

}
