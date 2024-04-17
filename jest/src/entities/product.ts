import { CartItem } from '/interfaces/CartItem';

export class Product implements CartItem {
  constructor(
    public name: string,
    public amount: number,
    public price: number,
  ) {}
}
