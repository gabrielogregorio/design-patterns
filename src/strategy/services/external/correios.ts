export class Correios {
  anyValue: number;

  constructor() {
    this.anyValue = 10;
  }

  discoveryShipping(_servico: string, peso: number): number {
    return peso * this.anyValue;
  }
}
