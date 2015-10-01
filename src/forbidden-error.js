import MeaningError from './meaning-error';

export default class ForbiddenError extends MeaningError {
  constructor(message = 'Forbidden') {
    super(message);
    this.code = 403;
  }
}
