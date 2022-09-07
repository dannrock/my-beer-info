export class Usuario {
  id!: number;
  nomeCompleto!: string;
  email!: string;
  senha!: string;
  isLoggedIn!: boolean;

  constructor() {
    this.id = Math.round(Math.random() * 1000);
    this.isLoggedIn = false
  }
}
