const { describe, it } = require('mocha');

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('When type === "SUM"', () => {
    it('should add two normal integers', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 2), 3);
    });

    it('should round the first number up', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 2), 4);
    });

    it('should round the first number up', () => {
      assert.strictEqual(calculateNumber('SUM', 1.6, 2), 4);
    });

    it('should round the first number down', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2), 3);
    });

    it('should round the second number up', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 2.6), 4);
    });

    it('should round the second number down', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 2.4), 3);
    });

    it('should add two rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 1.5), 4);
    });
  });

  describe('When type === "SUBTRACT"', () => {
    it('should subtract two normal integers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 2), -1);
    });

    it('should round the first number up', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 2), 0);
    });

    it('should round the first number up', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.6, 2), 0);
    });

    it('should round the first number down', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2), -1);
    });

    it('should round the second number up', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 2.6), -2);
    });

    it('should round the second number down', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 2.4), -1);
    });

    it('should subtract two rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 1.5), 0);
    });
  });

  describe('When type === "DIVIDE"', () => {
    it('should divide two normal integers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
    });

    it('should round the first number up', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.5, 2), 2);
    });

    it('should round the first number up', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.6, 2), 2);
    });

    it('should round the first number down', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.4, 2), 2);
    });

    it('should round the second number up', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2, 3.6), 0.5);
    });

    it('should round the second number down', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 2.4), 0.5);
    });

    it('should divide two rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 1.5), 1);
    });

    it('should not divide by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 0), 'Error');
    });
  });
});
