//  Dependency Inversion Principle
// "Dependa de abstrações e não de implementações"

import { Order } from './entities/order';
import { ShoppingCart } from './entities/shopping-cart';
import { SendingMessage } from './services/SendingMessage';

const shoppinCart = new ShoppingCart();
const sendingMessage = new SendingMessage();
const order = new Order(shoppinCart, sendingMessage);
order.checkout(0);
console.log('total de items no carrinho: ', shoppinCart.totalItems());
shoppinCart.addItem({ name: 'Camisa', amount: 10, price: 49.9 });
shoppinCart.addItem({ name: 'Calça', amount: 2, price: 99.9 });
shoppinCart.addItem({ name: 'Shorts', amount: 5, price: 89.9 });
console.log('total de items no carrinho: ', shoppinCart.totalItems());
order.checkout(70);
