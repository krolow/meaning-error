import MeaningError from './meaning-error';

export default class MethodNotAllowedError extends MeaningError {
  constructor(message='Method Not Allowed') {
    super(message);
    this.code = 405;
  }
}
