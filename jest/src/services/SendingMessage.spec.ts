import { expect, describe, it, jest } from '@jest/globals';
import { SendingMessage } from './SendingMessage';

describe('Sending Message Test', () => {
  it('should call console.log', () => {
    // system under test
    const sut = new SendingMessage();
    const msg = 'Pedido Salvo!';
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage(msg)
    expect(consoleSpy).toBeCalledWith("Mensagem enviada: " + msg);
  });
});
