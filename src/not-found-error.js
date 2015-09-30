import MeaningError from './meaning-error';

export default class NotFoundError extends MeaningError {
  constructor(message='Not Found') {
    super(message);
    this.code = 404;
  }
}
