import { Usuario } from './../../model/usuario';
import { LoginService } from 'src/app/services/login.service';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  user!: Usuario;
  confirmarSenha!: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.user = new Usuario();
    this.confirmarSenha = '';
  }

  cadastrarUsuarioWS() {
    this.user.isLoggedIn = true;
    this.loginService
      .cadastrarUsuarioWS(this.user)
      .catch((e) => {
        alert('Erro em cadastrarUsuarioWS (Registration)');
    });;
  }
}
