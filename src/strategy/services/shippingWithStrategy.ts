import { ShippingService } from '@/services/external';

export enum serviceEnum {
  CORREIOS = 'CORREIOS',
  FEDEX = 'FEDEX',
  TNT = 'TNT',
}

export class ShippingWithStrategy {
  private service: ShippingService;

  constructor(serivice: ShippingService) {
    this.service = serivice;
  }

  setStrategy(service: ShippingService): void {
    this.service = service;
  }

  calculate(peso: number): number {
    return this.service.calculate(peso);
  }
}
