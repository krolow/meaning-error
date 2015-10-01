import MeaningError from './meaning-error';

export default class BadRequestError extends MeaningError {
  constructor(message = 'Bad Request', error) {
    super(message);
    this.code = 400;
    this.error = error;
  }

  getError() {
    return this.error;
  }
}
