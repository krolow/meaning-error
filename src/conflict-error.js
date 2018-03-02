import MeaningError from './meaning-error';

export default class ConflictError extends MeaningError {
  constructor(message = 'Conflict') {
    super(message);
    this.code = 409;
  }
}
