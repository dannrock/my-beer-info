import { LoginService } from './services/login.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './model/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-beer-info';

  isLoggedIn: boolean = false;
  nomeCompleto!: string;

  constructor(
    private loginService: LoginService) {}

  ngOnInit(): void {
      this.loginService.getLoginState().subscribe(isLogged => {
      this.isLoggedIn = isLogged,
      this.getUsuarioLogado();
    })
  }

  getUsuarioLogado() {
    if(this.isLoggedIn) {
      this.loginService.getUsuarioLogadoWS()
        .then((usuario: Usuario) => this.nomeCompleto = usuario.nomeCompleto)
        .catch((e) => alert('Erro ao obter o usuário logado'));
    }
  }

}
