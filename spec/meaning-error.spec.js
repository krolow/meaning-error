import { expect } from 'chai';

import MeaningError from '../src/meaning-error';
import BadRequestError from '../src/bad-request-error';
import InternalServerError from '../src/internal-server-error';
import MethodNotAllowedError from '../src/method-not-allowed-error';
import UnauthorizationError from '../src/unauthorization-error';
import NotFoundError from '../src/not-found-error';

describe('meaning error', function () {
  it('should be able to throw error and catch it', function () {
    try {
      throw new MeaningError();
    } catch (e) {
      expect(e).to.be.instanceof(MeaningError);
      expect(e.getCode()).to.be.equal(500);
    }
  });

  it('should get the right code for errors', function () {
    try {
      throw new NotFoundError('Category was not found');
    } catch (e) {
      expect(e).to.be.instanceof(MeaningError);
      expect(e).to.be.instanceof(NotFoundError);
      expect(e.getMessage()).to.be.equal('Category was not found');
      expect(e.getCode()).to.be.equal(404);
    }

    try {
      throw new BadRequestError('Your post data it is not valid!');
    } catch (e) {
      expect(e).to.be.instanceof(MeaningError);
      expect(e).to.be.instanceof(BadRequestError);
      expect(e.getMessage()).to.be.equal('Your post data it is not valid!');
      expect(e.getCode()).to.be.equal(400);
    }

    try {
      throw new InternalServerError('Something weird just happen!');
    } catch (e) {
      expect(e).to.be.instanceof(MeaningError);
      expect(e).to.be.instanceof(InternalServerError);
      expect(e.getMessage()).to.be.equal('Something weird just happen!');
      expect(e.getCode()).to.be.equal(500);
    }

    try {
      throw new MethodNotAllowedError('This resource only allows PATCH request');
    } catch (e) {
      expect(e).to.be.instanceof(MeaningError);
      expect(e).to.be.instanceof(MethodNotAllowedError);
      expect(e.getMessage()).to.be.equal('This resource only allows PATCH request');
      expect(e.getCode()).to.be.equal(405);
    }
  });

  it('should be able to set errors for BadRequestError', function () {
    try {
      throw new BadRequestError('Not valid', [{name: 'required', date: 'invalid', 'text': 'long'}]);
    } catch (e) {
      expect(e.getError()).to.be.deep.equal([{name: 'required', date: 'invalid', 'text': 'long'}]);
    }
  });
});
