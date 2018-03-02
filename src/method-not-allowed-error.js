import MeaningError from './meaning-error';

export default class MethodNotAllowedError extends MeaningError {
  constructor(message = 'Method Not Allowed', error = 'method-not-allowed') {
    super(message, error);
    this.code = 405;
  }
}
