// Open-Closed Principle
// "Objetos ou entidades devem estar abertos para extensão, mas fechados para modificação"
// Principio que diz que uma classe deve ser extendida mas não modificada

import { IShoppingCart } from 'dip/interfaces/IShopinngCart';
import { CartItem } from '../interfaces/CartItem';

export class ShoppingCart implements IShoppingCart {
  private readonly _items: CartItem[] = [];

  addItem(item: CartItem): void {
    if (this._items.includes(item)) {
      console.log('Item já adicionado ao carrinho!');
      return;
    }
    this._items.push(item);
  }

  removeItem(index: number): void {
    if (this.isEmpty()) {
      console.log('Carrinho vázio!');
      return;
    }
    this._items.splice(index, 1);
  }

  totalPrice(): number {
    if (this.isEmpty()) {
      console.log('Carrinho Vázio!');
      return 0;
    }
    const total = Number(
      this._items.reduce((total, next) => total + next.price, 0).toFixed(2),
    );
    return total;
  }

  totalItems(): number {
    if (this.isEmpty()) {
      console.log('Carrinho vázio!');
      return 0;
    }
    return this._items.length;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }
}
