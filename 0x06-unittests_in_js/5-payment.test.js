const {
  describe, it, afterEach, beforeEach,
} = require('mocha');

const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  beforeEach(() => {
    sinon.spy(console, 'log');
  });

  afterEach(() => {
    console.log.restore();
  });

  it('should Verify that the console is logging the string "The total is: 120"', () => {
    sendPaymentRequestToApi(100, 20);

    expect(console.log.withArgs('The total is: 120').calledOnce).to.be.true;
  });

  it('should Verify that the console is logging the string "The total is: 20"', () => {
    sendPaymentRequestToApi(10, 10);

    expect(console.log.withArgs('The total is: 20').calledOnce).to.be.true;
  });
});
