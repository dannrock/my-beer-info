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
  email!: string | null;

  constructor(private loginService: LoginService) {

  }

  ngOnInit(): void {
    this.getIsLoggedIn();
    this.getUsuario();

    this.loginService.getSubject().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn,
      this.getUsuario();
    })
  }

  getUsuario() {
    this.email = this.loginService.getUsuario();
  }

  getIsLoggedIn() {
    this.isLoggedIn = this.loginService.isLoggedIn();
  }
}
