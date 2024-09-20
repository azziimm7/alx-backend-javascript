const { describe, it } = require('mocha');

const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise', (done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.have.property('data');

        done();
      });
  });
});
