/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
const { uppercase, getUserName } = require('../src/Exercicios');

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

describe('Exercise 2 test', () => {
  it('Function getUserName is defined', () => {
    expect(typeof getUserName).toBe('function');
  });

  describe('if the id exist', () => {
    it('return the user name', async () => {
      expect.assertions(1);
      await expect(getUserName(1)).resolves.toEqual('Mark');
    });
  });

  describe('if the id not exist', () => {
    it('return an error', async () => {
      expect.assertions(1);
      await expect(getUserName(4)).rejects.toEqual(new Error('User with 4 not found.'));
    });
  });
});