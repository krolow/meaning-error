import MeaningError from './meaning-error';

export default class ConflictError extends MeaningError {
  constructor(message = 'Conflict', error = 'conflict') {
    super(message, error);
    this.code = 409;
  }
}
