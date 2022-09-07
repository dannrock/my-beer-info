export class Cerveja {
  id!: number;
  fabricante!: string;
  marca!: string;
  familia!: string;
  tipo!: string;
  teor!: number;
  ibu!: number;
  cor!: string;

  constructor() {
    this.id = Math.round(Math.random() * 1000);
  }

}
