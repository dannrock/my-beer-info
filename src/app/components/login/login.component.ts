import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fazerLogin() {
    console.log('Efetuou login usando Event Binding');
    alert('Efetuou login usando Event Binding');
  }


}
