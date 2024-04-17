// Liskov Substitution Principle
// "Uma classe derivada deve ser substituível por sua classe base."

import { Order } from './entities/order';
import { ShoppingCart } from './entities/shopping-cart';

const shoppinCart = new ShoppingCart();
const order = new Order(shoppinCart);
order.checkout(0);
console.log('total de items no carrinho: ', shoppinCart.totalItems());
shoppinCart.addItem({ name: 'Camisa', amount: 10, price: 49.9 });
shoppinCart.addItem({ name: 'Calça', amount: 2, price: 99.9 });
shoppinCart.addItem({ name: 'Shorts', amount: 5, price: 89.9 });
console.log('total de items no carrinho: ', shoppinCart.totalItems());
order.checkout(70);
