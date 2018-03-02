import MeaningError from './meaning-error';

export default class UnauthorizationError extends MeaningError {
  constructor(message = 'Unauthorization', error = 'unauthorization') {
    super(message, error);
    this.code = 401;
  }
}
