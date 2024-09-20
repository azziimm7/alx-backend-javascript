const { describe, it } = require('mocha');

const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('When type === "SUM"', () => {
    it('should add two normal integers', () => {
      expect(calculateNumber('SUM', 1, 2)).to.equal(3);
    });

    it('should round the first number up', () => {
      expect(calculateNumber('SUM', 1.5, 2)).to.equal(4);
    });

    it('should round the first number up', () => {
      expect(calculateNumber('SUM', 1.6, 2)).to.equal(4);
    });

    it('should round the first number down', () => {
      expect(calculateNumber('SUM', 1.4, 2)).to.equal(3);
    });

    it('should round the second number up', () => {
      expect(calculateNumber('SUM', 1, 2.6)).to.equal(4);
    });

    it('should round the second number down', () => {
      expect(calculateNumber('SUM', 1, 2.4)).to.equal(3);
    });

    it('should add two rounded numbers', () => {
      expect(calculateNumber('SUM', 1.5, 1.5)).to.equal(4);
    });
  });

  describe('When type === "SUBTRACT"', () => {
    it('should subtract two normal integers', () => {
      expect(calculateNumber('SUBTRACT', 1, 2)).to.equal(-1);
    });

    it('should round the first number up', () => {
      expect(calculateNumber('SUBTRACT', 1.5, 2)).to.equal(0);
    });

    it('should round the first number up', () => {
      expect(calculateNumber('SUBTRACT', 1.6, 2)).to.equal(0);
    });

    it('should round the first number down', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 2)).to.equal(-1);
    });

    it('should round the second number up', () => {
      expect(calculateNumber('SUBTRACT', 1, 2.6)).to.equal(-2);
    });

    it('should round the second number down', () => {
      expect(calculateNumber('SUBTRACT', 1, 2.4)).to.equal(-1);
    });

    it('should subtract two rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.5, 1.5)).to.equal(0);
    });
  });

  describe('When type === "DIVIDE"', () => {
    it('should divide two normal integers', () => {
      expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
    });

    it('should round the first number up', () => {
      expect(calculateNumber('DIVIDE', 3.5, 2)).to.equal(2);
    });

    it('should round the first number up', () => {
      expect(calculateNumber('DIVIDE', 3.6, 2)).to.equal(2);
    });

    it('should round the first number down', () => {
      expect(calculateNumber('DIVIDE', 4.4, 2)).to.equal(2);
    });

    it('should round the second number up', () => {
      expect(calculateNumber('DIVIDE', 2, 3.6)).to.equal(0.5);
    });

    it('should round the second number down', () => {
      expect(calculateNumber('DIVIDE', 1, 2.4)).to.equal(0.5);
    });

    it('should divide two rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 1.5, 1.5)).to.equal(1);
    });

    it('should not divide by zero', () => {
      expect(calculateNumber('DIVIDE', 1.5, 0)).to.equal('Error');
    });
  });
});
