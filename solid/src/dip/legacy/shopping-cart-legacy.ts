// Single Responsibility Principle

// "Uma classe deve ter um e somente um motivo para mudar"

// Principio que diz que uma classe so deve ter uma Função / Responsabilidade

interface CartItem {
  name: string;
  amount: number;
  price: number;
}

type OrderStatus = 'OPEN' | 'CLOSED';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'OPEN';

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

  checkout(): void {
    if (this.orderStatus === 'CLOSED') {
      console.log('Pedido já fechado');
      return;
    }
    if (this.isEmpty()) {
      console.log('Carrinho vázio, adicione items ao carrinho para realizar a compra!');
      return;
    }
    console.log('Compra realizada com sucesso!');
    this._orderStatus = 'CLOSED';
    return;
  }

  sendMessage(msg: string) {
    console.log('mensagem enviada: ' + msg);
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
}
