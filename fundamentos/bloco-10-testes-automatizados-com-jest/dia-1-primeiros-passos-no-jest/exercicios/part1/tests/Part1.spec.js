const { sum } = require("../src/Part1")

describe('Function Sum', () => {
  it('sum is a function', () => {
    expect(typeof sum).toBe('function');
  });

  it(' 4 + 5 e igual a 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it(' 0 + 0 e igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it(`4 + "5" e igual a Error`, () => {
    expect(() => sum(4, '5')).toThrow(Error);
  });

  it('4 + "5" e igual a mensagem de erro', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  })
})
