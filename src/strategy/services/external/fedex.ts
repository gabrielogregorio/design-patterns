export class Fedex {
  anyExample: number;

  constructor() {
    this.anyExample = 11;
  }

  Shipping({ weight }: { weight: number }): number {
    return this.anyExample * weight;
  }
}
