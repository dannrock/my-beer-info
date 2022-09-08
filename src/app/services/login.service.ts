import { Usuario } from './../model/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable, throwError } from 'rxjs';

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

  getUsuarioLogadoWS() : Promise<Usuario> {
    return this.http
        .get<any>(`http://localhost:3000/users?isLoggedIn=${true}`, this.httpOptions)
        .toPromise()
        .then((users: Usuario[]) => users[0]);
  }

  getListaUsuariosWS() : Promise<Usuario[]> {
    return this.http.get<any>('http://localhost:3000/users', this.httpOptions).toPromise();
  }

  cadastrarUsuarioWS(usuario: Usuario) : Promise<Usuario> {
    let retorno = this.http
      .post<any>('http://localhost:3000/users', JSON.stringify(usuario), this.httpOptions)
      .toPromise();

    this.isLogged.next(true);
    this.router.navigate(['/beersummary']);

    return retorno;
  }

  fazerLoginWS(email: string, senha: string) {
    this.getListaUsuariosWS()
    .then((usuarios : Usuario[]) =>{
      let usuario = usuarios.find(us =>
        us.email === email &&
        us.senha === senha)

      if(usuario !== undefined) {
        usuario.isLoggedIn = true;

        this.http
          .put<Usuario>(`http://localhost:3000/users/${usuario.id}`, JSON.stringify(usuario), this.httpOptions)
          .toPromise();

        this.isLogged.next(true);
        this.router.navigate(['/beersummary']);
      }
    });
  }

  fazerLogoutWS() {
    this.getUsuarioLogadoWS()
      .then((usuario: Usuario) => {
        usuario.isLoggedIn = false;

        this.http
          .put<Usuario>(`http://localhost:3000/users/${usuario.id}`, JSON.stringify(usuario), this.httpOptions)
          .toPromise();

        this.isLogged.next(false);
        this.router.navigate(['']);
    })
  }

  recuperarSenha(email: string) {
    //Metodo apenas para ter um exemplo de LocalStorage
    localStorage.setItem('email-recuperacao', JSON.stringify(email));

    let emailRecuperado = JSON.parse(localStorage.getItem('email-recuperacao') as string);

    alert(`Email enviado para \"${emailRecuperado}\" com o link de recuperação!`)

    this.router.navigate(['']);
  }
}
