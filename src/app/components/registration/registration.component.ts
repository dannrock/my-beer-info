import { LoginService } from 'src/app/services/login.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationComponent implements OnInit {
  user = {
    nomeCompleto: null,
    email: null,
    senha: null,
    isLoggedIn: false
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  cadastrarUsuario() {
    this.user.isLoggedIn = true;
    this.loginService.cadastrarUsuario(this.user);
  }
}
