export class Cerveja {
  id!: number;
  fabricante: string;
  marca: string;
  familia: string;
  tipo: string;
  teor: number;
  ibu: number;
  cor: string;

  constructor(fabricante: string, marca: string, familia: string, tipo: string, teor: number, ibu: number, cor: string) {
    this.id = Math.round(Math.random() * 1000);
    this.fabricante = fabricante;
    this.marca = marca;
    this.familia = familia;
    this.tipo = tipo;
    this.teor = teor;
    this.ibu = ibu;
    this.cor = cor;
  }

}
