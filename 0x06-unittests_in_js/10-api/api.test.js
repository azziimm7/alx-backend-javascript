const { describe, it } = require('mocha');

const { expect } = require('chai');
const request = require('request');

describe('GET /cart/:id', () => {
  it('should return Correct status code when :id is a number', (done) => {
    request('http://localhost:7865/cart/12', (error, response) => {
      expect(response.statusCode).to.equal(200);

      done();
    });
  });

  it('should return Correct status code when :id is NOT a number', (done) => {
    request('http://localhost:7865/cart/hello', (error, response) => {
      expect(response.statusCode).to.equal(404);

      done();
    });
  });

  it('should return the Correct result', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(body).to.contain('Payment methods for cart 12');

      done();
    });
  });

  it('should return the Correct body length', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.headers['content-length']).to.equal('27');

      done();
    });
  });
});

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

describe('available_payments endpoint', () => {
  it('should return the Correct status code', (done) => {
    request('http://localhost:7865/available_payments', (error, response) => {
      expect(response.statusCode).to.equal(200);

      done();
    });
  });

  it('should return the Correct result', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      const obj = { payment_methods: { credit_cards: true, paypal: false } };

      expect(JSON.parse(body)).to.deep.equal(obj);

      done();
    });
  });
});

describe('available_payments endpoint', () => {
  const options = {
    url: 'http://localhost:7865/login',
    json: true,
    method: 'POST',
    body: { userName: 'Betty' },
  };

  it('should return the Correct status code', (done) => {
    request(options, (error, response) => {
      expect(response.statusCode).to.equal(200);

      done();
    });
  });

  it('should return the Correct result', (done) => {
    request(options, (error, response, body) => {
      expect(body).to.equal('Welcome Betty');

      done();
    });
  });
});
