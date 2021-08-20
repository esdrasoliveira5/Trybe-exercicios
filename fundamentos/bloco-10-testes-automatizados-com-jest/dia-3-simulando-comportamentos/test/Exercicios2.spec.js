const strings = require('../exercicios/Exercicios2');

jest.mock('../exercicios/Exercicios2');

describe('Function uppercaseString', () => {
  it(' Should return string to lowercase', () => {
    strings.uppercaseString.mockImplementation((string) => string.toLowerCase());

    expect(strings.uppercaseString('ABACATE')).toBe('abacate');
    expect(strings.uppercaseString).toHaveBeenCalled();
    expect(strings.uppercaseString).toHaveBeenCalledTimes(1);
    expect(strings.uppercaseString).toHaveBeenCalledWith('ABACATE');
  });
});

describe('Function firstLetter', () => {
  it('Should return the last letter', () => {
    strings.firstLetter.mockImplementation((string) => string.split('')[string.length - 1]);

    expect(strings.firstLetter('Abacate')).toBe('e');
    expect(strings.firstLetter).toHaveBeenCalled();
    expect(strings.firstLetter).toHaveBeenCalledTimes(1);
    expect(strings.firstLetter).toHaveBeenCalledWith('Abacate');
  });
});

describe('Function concatString', () => {
  it('Should return 3 concatenate strings', () => {
    strings.concatString.mockImplementation(
      (string1, string2, string3) => string1 + string2 + string3,
    );
    expect(strings.concatString('Abacate', 'Amarelo', 'Gerico')).toBe('AbacateAmareloGerico');
    expect(strings.concatString).toHaveBeenCalled();
    expect(strings.concatString).toHaveBeenCalledTimes(1);
    expect(strings.concatString).toHaveBeenCalledWith('Abacate', 'Amarelo', 'Gerico');
  });
});