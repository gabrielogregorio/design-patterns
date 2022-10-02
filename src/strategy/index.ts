import { ShippingCorreios, ShippingFedex, ShippingTnt } from '@/services/external';
import { Shipping, serviceEnum } from '@/services/shipping';
import { ShippingWithStrategy } from '@/services/shippingWithStrategy';

const KG_EXAMPLE: number = 1;

console.log(Shipping.calculate(serviceEnum.CORREIOS, KG_EXAMPLE));
console.log(Shipping.calculate(serviceEnum.FEDEX, KG_EXAMPLE));
console.log(Shipping.calculate(serviceEnum.TNT, KG_EXAMPLE));

console.log('---');

console.log(new ShippingWithStrategy(new ShippingCorreios()).calculate(KG_EXAMPLE));
console.log(new ShippingWithStrategy(new ShippingFedex()).calculate(KG_EXAMPLE));
console.log(new ShippingWithStrategy(new ShippingTnt()).calculate(KG_EXAMPLE));
