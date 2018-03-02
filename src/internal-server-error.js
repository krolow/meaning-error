import MeaningError from './meaning-error';

export default class InternalServerError extends MeaningError {
  constructor(message = 'Internal Server Error', error = 'internal-server-error') {
    super(message, error);
    this.code = 500;
  }
}
