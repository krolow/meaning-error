import MeaningError from './meaning-error';

export default class NotFoundError extends MeaningError {
  constructor(message = 'Not Found', error = 'not-found') {
    super(message, error);
    this.code = 404;
  }
}
