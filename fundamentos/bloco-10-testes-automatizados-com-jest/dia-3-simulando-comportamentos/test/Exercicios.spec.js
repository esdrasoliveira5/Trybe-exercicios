/* eslint-disable max-lines-per-function */
let { functionExercise } = require('../exercicios/Exercicios');

describe('functionExercise', () => {
  it('Should be return the result of function expected', () => {
    functionExercise = jest.fn().mockReturnValue(10);

    expect(functionExercise()).toBe(10);
    expect(functionExercise).toHaveBeenCalled();
    expect(functionExercise).toHaveBeenCalledTimes(1);
  });

  it('Should return the division expected', () => {
    functionExercise = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(functionExercise(10, 2)).toBe(5);
    expect(functionExercise).toHaveBeenCalled();
    expect(functionExercise).toHaveBeenCalledTimes(1);
    expect(functionExercise).toHaveBeenCalledWith(10, 2);
  });

  it('Should return de multiplication expected', () => {
    functionExercise = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);

    expect(functionExercise(2, 2, 2)).toBe(8);
    expect(functionExercise).toHaveBeenCalled();
    expect(functionExercise).toHaveBeenCalledTimes(1);
    expect(functionExercise).toHaveBeenCalledWith(2, 2, 2);

    functionExercise.mockReset();
    expect(functionExercise).toHaveBeenCalledTimes(0);

    functionExercise = jest.fn().mockImplementationOnce((a) => a * 2);

    expect(functionExercise(2)).toBe(4);
    expect(functionExercise).toHaveBeenCalled();
    expect(functionExercise).toHaveBeenCalledTimes(1);
    expect(functionExercise).toHaveBeenCalledWith(2);
  });
});