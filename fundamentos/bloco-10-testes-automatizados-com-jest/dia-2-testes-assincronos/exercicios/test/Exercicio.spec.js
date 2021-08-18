const { uppercase } = require('../src/Exercicios');

describe('Exercise 1 test', () => {
  it('Function uppercase is defined', () => {
    expect(typeof uppercase).toBe('function');
  });

  it('Is uppercase transforming abacate in ABACATE', (done) => {
    uppercase('abacate', (str) => {
      try {
        expect(str).toBe('ABACATE');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});