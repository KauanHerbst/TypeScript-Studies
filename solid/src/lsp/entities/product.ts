import { CartItem } from 'srp/interfaces/CartItem';

export class Product implements CartItem {
  constructor(
    public name: string,
    public amount: number,
    public price: number,
  ) {}
}
