import MeaningError from './meaning-error';

export default class TimeoutError extends MeaningError {
  constructor(message = 'Timeout', error = 'timeout') {
    super(message, error);
    this.code = 408;
  }
}
