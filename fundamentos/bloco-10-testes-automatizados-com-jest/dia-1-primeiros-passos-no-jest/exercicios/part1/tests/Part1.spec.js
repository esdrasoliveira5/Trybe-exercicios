const { sum,  myRemove, myRemoveWithoutCopy } = require("../src/Part1");

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

describe('Function myRemove', () => {
  it('myRemove', () => {
    expect(typeof myRemove).toBe('function');
  });

  it('recebe o array [1, 2, 3, 4] e recebe [1, 2, 4]', () => {
    const array = [1, 2, 3, 4];
    expect(myRemove(array, 3)).toStrictEqual([1, 2, 4]);
  });

  it('recebe o array [1, 2, 3, 4] e nao recebe [1, 2, 3, 4]', () => {
    const array = [1, 2, 3, 4];
    expect(myRemove(array, 3)).not.toStrictEqual([1, 2, 3, 4]);
  });

  it('verifica se o array nao sofre alteracoes', () => {
    const array = [1, 2, 3, 4];
    myRemove(array, 3);
    expect(array).toStrictEqual([1, 2, 3, 4]);
  });

  it('Verifica se o myRemove([1, 2, 3, 4], 5) retorna o esperado', () => {
    const array = [1, 2, 3, 4];
    expect(myRemove(array, 5)).toStrictEqual([1, 2, 3, 4]);
  });
})

describe('Function myRemoveWithoutCopy', () => {
  it('Verifica se myRemoveWithoutCopy e uma funcao', () => {
    expect(typeof myRemoveWithoutCopy).toBe('function');
  });

  it('Verifica se a myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
  });

  it('Verifica se a myRemoveWithoutCopy([1, 2, 3, 4], 3) nao retorna o array [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toStrictEqual(([1, 2, 3, 4]));
  });

  it('Verifica se o array passado por paramentro sofre alteracoes', () => {
    const array = [1, 2, 3, 4];
    myRemoveWithoutCopy(array, 3)
    expect(array).not.toStrictEqual([1, 2, 3, 4]);
  });

  it('Verifica se a chamda myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toStrictEqual(([1, 2, 3, 4]));
  });
})
