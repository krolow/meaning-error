import MeaningError from './meaning-error';

export default class UnauthorizationError extends MeaningError {
  constructor(message='Unauthorization') {
    super(message);
    this.code = 401;
  }
}
