import { Cerveja } from './../../model/cerveja';
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

  beer!: Cerveja;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private beerService: BeerService) { }

  ngOnInit(): void {
    this.beer = new Cerveja();
    this.getCervejaId();
  }

  salvar() {
    const id = this.route.snapshot.queryParams['id'];

    if(id === undefined) {
      this.beerService
        .registrarCerveja(this.beer)
        .subscribe();
    }
    else {
      this.beerService
        .atualizarCerveja(this.beer)
        .subscribe();
    }

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
      this.beerService
        .excluirCerveja(id)
        .subscribe();

      this.router.navigate(['/beerlist']);
    }
  }

  getCervejaId() {
    const id = this.route.snapshot.queryParams['id'];

    if(id !== undefined) {
      this.beerService
        .getCerveja(Number(id))
        .subscribe((beer: Cerveja) => {
          this.beer = beer
      });
    }
  }

}
