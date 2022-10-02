import { Correios } from './external/correios';
import { Fedex } from './external/fedex';
import { Tnt } from './external/tnt';

// no use inject dependency

export enum serviceEnum {
  CORREIOS = 'CORREIOS',
  FEDEX = 'FEDEX',
  TNT = 'TNT',
}

export class Shipping {
  static calculate(service: serviceEnum, peso: number): number {
    if (service === serviceEnum.CORREIOS) {
      const correios: Correios = new Correios();
      return correios.discoveryShipping('', peso);
    }
    if (service === serviceEnum.FEDEX) {
      const fedex: Fedex = new Fedex();
      return fedex.Shipping({ weight: peso });
    }
    if (service === serviceEnum.TNT) {
      const tnt: Tnt = new Tnt();
      return tnt.calculate(peso);
    }

    throw new Error("Service don't exists");
  }
}
