import MeaningError from './meaning-error';

export default class PaymentRequiredError extends MeaningError {
  constructor(message = 'Payment Required') {
    super(message);
    this.code = 402;
  }
}
