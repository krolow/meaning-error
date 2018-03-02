import MeaningError from './meaning-error';

export default class ForbiddenError extends MeaningError {
  constructor(message = 'Forbidden', error = 'forbidden') {
    super(message, error);
    this.code = 403;
  }
}
