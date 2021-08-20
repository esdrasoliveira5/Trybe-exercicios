let { functionExercise } = require('../exercicios/Exercicios');

describe('functionExercise', () => {
  it('Should be return', () => {
    functionExercise = jest.fn().mockReturnValue(10);

    expect(functionExercise()).toBe(10);
    expect(functionExercise).toHaveBeenCalled();
    expect(functionExercise).toHaveBeenCalledTimes(1);
  });

  it('Should return the expected', () => {
    functionExercise = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(functionExercise(10, 2)).toBe(5);
    expect(functionExercise).toHaveBeenCalled();
    expect(functionExercise).toHaveBeenCalledTimes(1);
    expect(functionExercise).toHaveBeenCalledWith(10, 2);
  });

  
});