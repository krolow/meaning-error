import MeaningError from './meaning-error';

export default class BadRequestError extends MeaningError {
  constructor(message = 'Bad Request', error = 'bad-request') {
    super(message, error);
    this.code = 400;
  }
}
