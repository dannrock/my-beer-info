export class Usuario {
  id!: number;
  nomeCompleto?: string;
  email: string;
  senha: string;
  isLoggedIn: boolean;

  constructor(nomeCompleto: string, email: string, senha: string, isLoggedIn: boolean = false) {
    this.id = Math.round(Math.random() * 1000);
    this.nomeCompleto = nomeCompleto;
    this.email = email;
    this.senha = senha;
    this.isLoggedIn = isLoggedIn;
  }
}
