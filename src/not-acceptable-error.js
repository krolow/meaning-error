import MeaningError from './meaning-error';

export default class NotAcceptableError extends MeaningError {
  constructor(message = 'Not Acceptable') {
    super(message);
    this.code = 406;
  }
}
