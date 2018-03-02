import ExtendableError from 'es6-error';

export default class MeaningError extends ExtendableError {
  constructor(message = 'Server Error', error = 'server-error') {
    super(message);

    this._error = error;
    this._message = message;

    if (!this.code) {
      this.code = 500;
    }
  }

  getCode() {
    return this.code;
  }

  getError() {
    return this._error;
  }

  getMessage() {
    return this._message;
  }
}
