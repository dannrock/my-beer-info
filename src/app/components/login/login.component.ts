import { LoginService } from './../../services/login.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  email!: string;
  senha!: string;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  validarLogin() {
    this.loginService.fazerLogin(this.email, this.senha)
  }
}
