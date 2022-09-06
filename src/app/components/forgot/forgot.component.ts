import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ForgotComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  email!: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.email = '';
  }

  recuperarSenha() {
    alert('Enviamos um e-mail com o link para recuperação da senha!')
    this.form.reset();
    this.email = '';
    this.router.navigate(['/']);
  }

}
