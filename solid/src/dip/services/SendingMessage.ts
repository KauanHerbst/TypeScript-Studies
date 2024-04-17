import { ISendingMessage } from '../interfaces/ISendingMessage';

export class SendingMessage implements ISendingMessage {
  sendMessage(msg: string) {
    console.log('Mensagem enviada: ' + msg);
  }
}
