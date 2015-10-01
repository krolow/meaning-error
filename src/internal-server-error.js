import MeaningError from './meaning-error';

export default class InternalServerError extends MeaningError {
  constructor(message = 'Internal Server Error') {
    super(message);
    this.code = 500;
  }
}
