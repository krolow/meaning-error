import ExtendableError from 'es6-error';

export default class MeaningError extends ExtendableError {
  constructor(message = 'Server Error') {
    super(message);

    this._message = message;

    if (!this.code) {
      this.code = 500;
    }
  }

  getCode() {
    return this.code;
  }

  getMessage() {
    return this._message;
  }
}
