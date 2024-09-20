const { describe, it } = require('mocha');

const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  it('should return the Correct status code', (done) => {
    request('http://localhost:7865', (error, response) => {
      expect(response.statusCode).to.equal(200);

      done();
    });
  });

  it('should return the Correct result', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.contain('Welcome to the payment system');

      done();
    });
  });

  it('should return the Correct body length', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.headers['content-length']).to.equal('29');

      done();
    });
  });
});
