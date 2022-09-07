import { LoginService } from './../../services/login.service';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  email!: any;
  senha!: any;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.email = '';
    this.senha = '';
    this.listaUsuarios();
  }

  efetuarLogin() {
    this.loginService.fazerLogin(this.email, this.senha)
    this.form.reset();
  }

  listaUsuarios() {
    this.loginService
      .getListaUsuariosWS()
      .then((usuarios) => {
        alert(usuarios[0].nomeCompleto);
      })
      .catch((e) => {
        alert('Deu bosta');
      });
  }
}
