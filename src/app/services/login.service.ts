import { Usuario } from './../model/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isLogged = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    private router: Router) { }

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

  getLoginState(){
    return this.isLogged;
  }

  getUsuarioLogado() {
    let usuarios = this.getListaUsuarios();

    let user = usuarios.find((user: any) =>
      user.isLoggedIn === true);

    if(user != null) {
      return user;
    }
  }

  getListaUsuariosWS() : Promise<Usuario[]> {
    return this.http.get<any>('http://localhost:3000/users', this.httpOptions).toPromise();
  }

  getListaUsuarios() {
    let usuarios = JSON.parse(localStorage.getItem('usuarios') as string);

    if(usuarios === null) {
      usuarios = [];
    }
    return usuarios;
  }

  cadastrarUsuario(user: any) {
    let usuarios = this.getListaUsuarios();
    usuarios.push(user)
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    this.isLogged.next(true);
    this.router.navigate(['/beersummary']);
  }

  fazerLogin(email: string, senha: string) {
    let usuarios = this.getListaUsuarios();

    let userIndex = usuarios.findIndex((user: any) =>
      user.email === email &&
      user.senha === senha);

    if(userIndex !== -1) {
      usuarios[userIndex].isLoggedIn = true;
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      this.isLogged.next(true);

      this.router.navigate(['/beersummary']);
    }
  }

  fazerLogout() {
    let usuarios = this.getListaUsuarios();

    let userIndex = usuarios.findIndex((user: any) =>
      user.isLoggedIn === true);

    if(userIndex !== -1) {
      usuarios[userIndex].isLoggedIn = false;
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      this.isLogged.next(false);

      this.router.navigate(['']);
    }
  }

}
