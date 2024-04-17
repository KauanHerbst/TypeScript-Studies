import { expect, describe, it, jest } from '@jest/globals';
import { Order } from './order';
import { ShoppingCart } from './shopping-cart';
import { SendingMessage } from '../services/SendingMessage';
import { CartItem } from '../interfaces/CartItem';

const createShoppingMock = () => {
  class ShoppingMock extends ShoppingCart {}
  return new ShoppingMock();
};

const createSendingMessageMock = () => {
  class SendingMessageMock extends SendingMessage {}
  return new SendingMessageMock();
};

const createCartItemMock = (name: string, amount: number, price: number) => {
  class CartItemMock implements CartItem {
    constructor(
      public name: string,
      public amount: number,
      public price: number,
    ) {}
  }
  return new CartItemMock(name, amount, price);
};

const createSutWithMock = () => {
  const shoppingMock = createShoppingMock();
  const sendingMessageMock = createSendingMessageMock();
  return new Order(shoppingMock, sendingMessageMock);
};

const createSutWithMockAndCartItems = () => {
  const cartItem1 = createCartItemMock('Shirt', 10, 49.9);
  const cartItem2 = createCartItemMock('Shorts', 5, 89.9);
  const shoppingMock = createShoppingMock();
  const sendingMessageMock = createSendingMessageMock();
  shoppingMock.addItem(cartItem1);
  shoppingMock.addItem(cartItem2);
  return new Order(shoppingMock, sendingMessageMock);
};

describe('Orders Test', () => {
  it('should checkout', () => {
    const sut = createSutWithMockAndCartItems();
    const discount = 0;
    expect(sut.orderStatus).toBe('OPEN');
    sut.checkout(discount);
    expect(sut.orderStatus).toBe('CLOSED');
  });

  it('should not checkout because it is closed', () => {
    const sut = createSutWithMockAndCartItems();
    const discount = 0;
    const consoleSpy = jest.spyOn(console, 'log');
    sut.checkout(discount);
    sut.checkout(discount);
    expect(consoleSpy).toBeCalledWith('Pedido já fechado');
  });

  it('should not checkout because cart is empty', () => {
    const sut = createSutWithMock();
    const discount = 0;
    const consoleSpy = jest.spyOn(console, 'log');
    sut.checkout(discount);
    expect(consoleSpy).toBeCalledWith('Carrinho vázio, adicione items ao carrinho para realizar a compra!');
  });

  it('should return totalWithDiscount', () => {
    const sut = createSutWithMockAndCartItems();
    const discount = 50;
    const totalWithDiscount = sut.totalWithDiscount(discount);
    expect(69.9).toBe(totalWithDiscount);
  });
});
