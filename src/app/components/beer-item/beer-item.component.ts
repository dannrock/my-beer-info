import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.css']
})
export class BeerItemComponent implements OnInit {
  @Input() beer: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  detalhesCerveja(id: number) {
    this.router.navigate(['/beerregister'], {queryParams:{id}});
  }

}
