import { OrderStatus } from 'srp/interfaces/OrderStatus';
import { ShoppingCart } from './shopping-cart';
import { SendingMessage } from '../services/SendingMessage';

export class Order {
  private _orderStatus: OrderStatus = 'OPEN';
  private sendingMessage;
  constructor(private readonly cart: ShoppingCart) {
    this.sendingMessage = new SendingMessage();
  }

  checkout(): void {
    if (this.orderStatus === 'CLOSED') {
      console.log('Pedido já fechado');
      return;
    }
    if (this.cart.isEmpty()) {
      console.log('Carrinho vázio, adicione items ao carrinho para realizar a compra!');
      return;
    }
    this.sendingMessage.sendMessage('Compra Realizada com Sucesso!');
    this._orderStatus = 'CLOSED';
    return;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
}
