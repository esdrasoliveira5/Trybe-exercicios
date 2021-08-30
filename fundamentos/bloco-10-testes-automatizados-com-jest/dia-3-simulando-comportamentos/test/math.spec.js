const math = require('../exemplos/math');

jest.mock('../exemplos/math');

test('Somar', async () => {
  const mockSomar = jest.spyOn(math, 'somar');
  mockSomar.mockResolvedValue(5);
  
  mockSomar(2, 3);
  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar).toHaveBeenCalledWith(2, 3);
  await expect(mockSomar(2, 3)).resolves.toBe(5);
});

test('Subtrair', () => {
  math.subtrair.mockImplementation();

  math.subtrair();
  expect(math.subtrair).toHaveBeenCalled();
});

test('Multiplicar', () => {
  math.multiplicar.mockImplementation().mockReturnValue(10);

  math.multiplicar();
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar()).toBe(10);
});

test('DIvidir', () => {
  math.dividir.mockImplementation().mockReturnValue(15);

  math.dividir();
});