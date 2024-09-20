const { describe, it } = require('mocha');

const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should make sure that the math used for sendPaymentRequestToApi is the same as Utils.calculateNumber', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const log = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnce).to.be.true;
    expect(calculateNumberStub.firstCall.args[0]).to.equal('SUM');
    expect(calculateNumberStub.firstCall.args[1]).to.equal(100);
    expect(calculateNumberStub.firstCall.args[2]).to.equal(20);

    expect(log.calledOnce).to.be.true;
    expect(log.firstCall.args[0]).to.equal('The total is: 10');

    log.restore();
    calculateNumberStub.restore();
  });
});
