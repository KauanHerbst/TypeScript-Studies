import { CartItem } from './CartItem';

export interface IShoppingCart {
  addItem(item: CartItem): void;
  removeItem(index: number): void;
  totalPrice(): number;
  totalItems(): number;
  isEmpty(): boolean;
}
