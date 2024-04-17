import { OrderStatus } from 'srp/interfaces/OrderStatus';
import { ShoppingCart } from './shopping-cart';
import { SendingMessage } from '../services/SendingMessage';

export class Order {
  private _orderStatus: OrderStatus = 'OPEN';
  private sendingMessage;
  constructor(private readonly cart: ShoppingCart) {
    this.sendingMessage = new SendingMessage();
  }

  checkout(discount: number): void {
    if (this.orderStatus === 'CLOSED') {
      console.log('Pedido já fechado');
      return;
    }
    if (this.cart.isEmpty()) {
      console.log('Carrinho vázio, adicione items ao carrinho para realizar a compra!');
      return;
    }
    const total = this.totalWithDiscount(discount);
    this.sendingMessage.sendMessage(`Compra no preço de ${total} Realizada com Sucesso!`);
    this._orderStatus = 'CLOSED';
    return;
  }

  totalWithDiscount(discount: number): number {
    if (discount) {
      return this.cart.totalPrice() - this.cart.totalPrice() * (discount / 100);
    }
    return this.cart.totalPrice();
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
}
