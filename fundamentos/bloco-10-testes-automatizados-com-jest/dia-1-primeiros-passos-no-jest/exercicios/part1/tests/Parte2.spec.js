const {encode, decode} = require('../src/Parte2');

describe('Exercise 1', () => {
  describe('Funcrion encode', () => {
    it('encode is a function', () => {
      expect(typeof encode).toBe('function');
    });

    it('Verify if encode(a, e, i, o, u) are converted in 1, 2, 3, 4 and 5 respectively', () => {
      expect(encode('aeiou')).toBe('12345');
    });

    it('Verify if encode(abacaxi) are converted in 1b1c1x3', () => {
      expect(encode('abacaxi')).toBe('1b1c1x3');
    });

    it('Check if the parameter has the same number of characters as the result', () => {
      const string = 'abacaxi';
      expect(string.length).toBe(encode('abacaxi').length);
    });
  });

  describe('Function decode', () => {
    it('decode is a function', () => {
      expect(typeof decode).toBe('function');
    });

    it('Verify if decode(1,2,3,4,5) are converted in a,e,i,o,u respectively', () => {
      expect(decode('12345')).toBe('aeiou');
    });

    it('Verify if decode(1b1c1x3) are converted in abacaxi', () => {
      expect(decode('1b1c1x3')).toBe('abacaxi');
    });

    it('Check if the parameter has the same number of characters as the result', () => {
      const string = '1b1c1x3';
      expect(string.length).toBe(decode('1b1c1x3').length);
    });
  });
});