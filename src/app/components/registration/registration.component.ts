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

  user = {
    nomeCompleto: null,
    email: null,
    senha: null,
    isLoggedIn: false
  }

  confirmarSenha!: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.confirmarSenha = '';
  }

  cadastrarUsuario() {
    this.user.isLoggedIn = true;
    this.loginService.cadastrarUsuario(this.user);
  }
}
