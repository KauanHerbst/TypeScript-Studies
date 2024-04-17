// Single Responsibility Principle
// "Uma classe deve ter um e somente um motivo para mudar"
// Principio que diz que uma classe so deve ter uma Função / Responsabilidade

import { CartItem } from 'srp/interfaces/CartItem';

export class ShoppingCart {
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
