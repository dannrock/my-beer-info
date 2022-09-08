import { count, Observable } from 'rxjs';
import { Cerveja } from './../model/cerveja';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
   };

  getListaCervejas(): Observable<Cerveja[]> {
    return this.http
      .get<Cerveja[]>('http://localhost:3000/beers', this.httpOptions)
  }

  registrarCerveja(beer: Cerveja): Observable<Cerveja> {
    return this.http
      .post<Cerveja>('http://localhost:3000/beers', JSON.stringify(beer), this.httpOptions);
  }

  getCerveja(id: number): Observable<Cerveja> {
    return this.http
      .get<Cerveja>(`http://localhost:3000/beers/${id}`, this.httpOptions);
  }

  excluirCerveja(id: number): Observable<Cerveja> {
    return this.http
      .delete<Cerveja>(`http://localhost:3000/beers/${id}`, this.httpOptions);
  }
}
