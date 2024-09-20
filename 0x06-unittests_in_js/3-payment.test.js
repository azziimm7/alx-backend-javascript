const { describe, it } = require('mocha');

const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should make sure that the math used for sendPaymentRequestToApi is the same as Utils.calculateNumber', () => {
    const calculateNumber = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumber.calledOnce).to.be.true;
    expect(calculateNumber.firstCall.args[0]).to.equal('SUM');
    expect(calculateNumber.firstCall.args[1]).to.equal(100);
    expect(calculateNumber.firstCall.args[2]).to.equal(20);

    calculateNumber.restore();
  });
});
