import { Subject } from 'rxjs';
import { LoginService } from './services/login.service';
import { Component, OnInit } from '@angular/core';

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
      let user = this.loginService.getUsuarioLogado();

      this.nomeCompleto = user.nomeCompleto;
    }
  }

}
