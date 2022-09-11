import { Usuario } from './../model/usuario';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

  getLoginState(){
    return this.isLogged;
  }

  getUsuarioLogadoWS() : Promise<Usuario> {
    let promise = new Promise<Usuario>((resolve, reject) => {
      this.http
        .get<Usuario[]>(`http://localhost:3000/users?isLoggedIn=${true}`, this.httpOptions)
        .toPromise()
        .then(usuarios => resolve(usuarios![0]!))
        .catch(erro => reject('Atenção: Serviço fora do ar! (Json Server iniciado?)'));
    });

    return promise;
  }

  getListaUsuariosWS() : Promise<Usuario[]> {
    let promise = new Promise<Usuario[]>((resolve, reject) => {
      this.http.get<Usuario[]>('http://localhost:3000/users', this.httpOptions)
        .toPromise()
        .then(usuarios => resolve(usuarios!))
        .catch(erro => reject('Atenção: Serviço fora do ar! (Json Server iniciado?)'))
    });

    return promise;
  }

  cadastrarUsuarioWS(usuario: Usuario) : Promise<Usuario> {
    let promise = new Promise<Usuario>((resolve, reject) => {
      this.http
        .post<Usuario>('http://localhost:3000/users', JSON.stringify(usuario), this.httpOptions)
        .toPromise()
        .then(usuario => {
          this.isLogged.next(true);
          this.router.navigate(['/beersummary']);

          resolve(usuario!);
        })
        .catch(erro => reject('Atenção: Serviço fora do ar! (Json Server iniciado?)'));
    });

    return promise;
  }

  atualizarUsuarioWS(usuario: Usuario): Promise<Usuario> {
    let promise = new Promise<Usuario>((resolve, reject) => {
      this.http
        .put<Usuario>(`http://localhost:3000/users/${usuario.id}`, JSON.stringify(usuario), this.httpOptions)
        .toPromise()
        .then(usuario => resolve(usuario!))
        .catch(erro => reject('Atenção: Serviço fora do ar! (Json Server iniciado?)'));
    });

    return promise;
  }

  fazerLoginWS(email: string, senha: string) : Promise<Usuario> {
    let promise = new Promise<Usuario>((resolve, reject) => {
      this.getListaUsuariosWS()
        .then(
          (usuarios) => {
            let usuario = usuarios.find(us =>
              us.email === email &&
              us.senha === senha)

            if(usuario !== undefined) {
              usuario!.isLoggedIn = true;
              this.atualizarUsuarioWS(usuario!);

              this.isLogged.next(true);
              this.router.navigate(['/beersummary']);

              resolve(usuario!);
            }
            else {
              reject('Atenção: Usuário não encontrado!')
            }
          },
          () => {
            reject('Atenção: Serviço fora do ar! (Json Server iniciado?)')
        })
    });

    return promise;
  }

  fazerLogoutWS(): Promise<Usuario> {
    let promise = new Promise<Usuario>((resolve, reject) => {
      this.getUsuarioLogadoWS()
        .then((usuario) => {
          usuario.isLoggedIn = false;
          this.atualizarUsuarioWS(usuario!);

          this.isLogged.next(false);
          this.router.navigate(['']);

          resolve(usuario!);
        })
        .catch(erro => reject('Atenção: Serviço fora do ar! (Json Server iniciado?)'));
      });
    return promise;
  }

  recuperarSenha(email: string) {
    //Metodo apenas para ter um exemplo de LocalStorage
    localStorage.setItem('email-recuperacao', JSON.stringify(email));

    let emailRecuperado = JSON.parse(localStorage.getItem('email-recuperacao') as string);

    alert(`Email enviado para \"${emailRecuperado}\" com o link de recuperação!`)

    this.router.navigate(['']);
  }
}
