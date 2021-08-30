const strings = require('../exercicios/Exercicios2');

describe('Function uppercaseString', () => {
  it('should return string to UpperCase', () => {
    const first = jest.spyOn(strings, 'uppercaseString');

    expect(first('abacate')).toBe('ABACATE');
    expect(first).toHaveBeenCalled();
    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith('abacate');
  });
});