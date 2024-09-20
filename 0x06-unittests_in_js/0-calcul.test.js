const { describe, it } = require('mocha');

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should add two normal integers', () => {
    assert.strictEqual(calculateNumber(1, 2), 3);
  });

  it('should round the first number up', () => {
    assert.strictEqual(calculateNumber(1.5, 2), 4);
  });

  it('should round the first number up', () => {
    assert.strictEqual(calculateNumber(1.6, 2), 4);
  });

  it('should round the first number down', () => {
    assert.strictEqual(calculateNumber(1.4, 2), 3);
  });

  it('should round the second number up', () => {
    assert.strictEqual(calculateNumber(1, 2.6), 4);
  });

  it('should round the second number down', () => {
    assert.strictEqual(calculateNumber(1, 2.4), 3);
  });

  it('should add two rounded numbers', () => {
    assert.strictEqual(calculateNumber(1.5, 1.5), 4);
  });
});
