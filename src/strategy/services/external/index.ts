/* eslint-disable class-methods-use-this */
import { Correios } from '@/services/external/correios';
import { Fedex } from '@/services/external/fedex';
import { Tnt } from '@/services/external/tnt';

export interface ShippingService {
  calculate: (peso: number) => number;
}

export class ShippingCorreios implements ShippingService {
  calculate(peso: number): number {
    const correios: Correios = new Correios();
    return correios.discoveryShipping('', peso);
  }
}

export class ShippingFedex implements ShippingService {
  calculate(peso: number): number {
    const fedex: Fedex = new Fedex();
    return fedex.Shipping({ weight: peso });
  }
}

export class ShippingTnt implements ShippingService {
  calculate(peso: number): number {
    const tnt: Tnt = new Tnt();
    return tnt.calculate(peso);
  }
}
 