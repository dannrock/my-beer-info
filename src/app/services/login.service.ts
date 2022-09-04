import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginService = new Subject<boolean>();

  constructor(private router: Router) { }

  getSubject(){
    return this.loginService;
  }

  isLoggedIn() {
    return Boolean (localStorage.getItem('isLoggedIn'));
  }

  getUsuario() {
    return localStorage.getItem('usuario');
  }

  fazerLogin(usuario: string) {
    localStorage.setItem('isLoggedIn', JSON.stringify(true));
    localStorage.setItem('usuario', usuario);
    this.loginService.next(true);
  }

  fazerLogout() {
    localStorage.setItem('isLoggedIn', JSON.stringify(false));
    this.loginService.next(false);
    this.router.navigate(['']);
  }
}
