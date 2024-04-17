import { expect, describe, it } from '@jest/globals';
import { ShoppingCart } from './shopping-cart';
import { CartItem } from '../interfaces/CartItem';

const createSut = () => {
  return new ShoppingCart();
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

const createSutWithCartItemsMock = () => {
  const cartItem1 = createCartItemMock('Shirt', 10, 49.9);
  const cartItem2 = createCartItemMock('Shorts', 5, 89.9);
  const sut = createSut();
  sut.addItem(cartItem1);
  sut.addItem(cartItem2);
  return sut;
};

describe('Shopping Cart Test', () => {
  it('should cart be empty', () => {
    const sut = createSut();
    expect(sut.isEmpty()).toBeTruthy();
  });

  it('should add item to cart', () => {
    const sut = createSut();
    const cartItem1 = createCartItemMock('Shirt', 10, 79.9);
    sut.addItem(cartItem1);
    expect(sut.totalItems()).toBe(1);
  });

  it('should remove item to cart', () => {
    const sut = createSutWithCartItemsMock();
    sut.removeItem(0)
    sut.removeItem(0)
    expect(sut.totalItems()).toBe(0);
  });

  it('should have 2 items in cart', () => {
    const sut = createSutWithCartItemsMock();
    expect(sut.totalItems()).toBe(2);
  });
});
