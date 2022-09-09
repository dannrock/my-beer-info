export class Cerveja {
  id!: number;
  fabricante!: string;
  marca!: string;
  familia!: string;
  tipo!: string;
  teor!: number;
  ibu!: number;
  cor!: string;
  qtdEstrelas: string;

  constructor() {
    this.id = Math.round(Math.random() * 1000);
    this.qtdEstrelas = "1";
  }

}
