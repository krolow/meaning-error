import MeaningError from './meaning-error';

export default class TimeoutError extends MeaningError {
  constructor(message = 'Timeout') {
    super(message);
    this.code = 408;
  }
}
