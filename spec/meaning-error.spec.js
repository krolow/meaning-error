import { expect } from 'chai';

import {MeaningError, BadRequestError, InternalServerError, MethodNotAllowedError, UnauthorizationError, NotFoundError, TimeoutError} from '../src/';

describe('meaning error', function () {
  it('should be able to throw error and catch it', function () {
    try {
      throw new MeaningError();
    } catch (error) {
      expect(error).to.be.instanceof(MeaningError);
      expect(error.getCode()).to.be.equal(500);
    }
  });

  it('should get the right code for errors', function () {
    try {
      throw new NotFoundError('Category was not found');
    } catch (error) {
      expect(error).to.be.instanceof(MeaningError);
      expect(error).to.be.instanceof(NotFoundError);
      expect(error.getMessage()).to.be.equal('Category was not found');
      expect(error.getCode()).to.be.equal(404);
    }

    try {
      throw new BadRequestError('Your post data it is not valid!');
    } catch (error) {
      expect(error).to.be.instanceof(MeaningError);
      expect(error).to.be.instanceof(BadRequestError);
      expect(error.getMessage()).to.be.equal('Your post data it is not valid!');
      expect(error.getCode()).to.be.equal(400);
    }

    try {
      throw new InternalServerError('Something weird just happen!');
    } catch (error) {
      expect(error).to.be.instanceof(MeaningError);
      expect(error).to.be.instanceof(InternalServerError);
      expect(error.getMessage()).to.be.equal('Something weird just happen!');
      expect(error.getCode()).to.be.equal(500);
    }

    try {
      throw new MethodNotAllowedError('This resource only allows PATCH request');
    } catch (error) {
      expect(error).to.be.instanceof(MeaningError);
      expect(error).to.be.instanceof(MethodNotAllowedError);
      expect(error.getMessage()).to.be.equal('This resource only allows PATCH request');
      expect(error.getCode()).to.be.equal(405);
    }

    try {
      throw new UnauthorizationError('You must login to access this resource');
    } catch (error) {
      expect(error).to.be.instanceof(MeaningError);
      expect(error).to.be.instanceof(UnauthorizationError);
      expect(error.getMessage()).to.be.equal('You must login to access this resource');
      expect(error.getCode()).to.be.equal(401);
    }

    try {
      throw new TimeoutError('Your connection is too slow');
    } catch (error) {
      expect(error).to.be.instanceof(MeaningError);
      expect(error).to.be.instanceof(TimeoutError);
      expect(error.getMessage()).to.be.equal('Your connection is too slow');
      expect(error.getCode()).to.be.equal(408);
    }
  });

  it('should be able to set errors for BadRequestError', function () {
    try {
      throw new BadRequestError('Not valid', [{name: 'required', date: 'invalid', 'text': 'long'}]);
    } catch (error) {
      expect(error.getError()).to.be.deep.equal([{name: 'required', date: 'invalid', 'text': 'long'}]);
    }
  });
});
