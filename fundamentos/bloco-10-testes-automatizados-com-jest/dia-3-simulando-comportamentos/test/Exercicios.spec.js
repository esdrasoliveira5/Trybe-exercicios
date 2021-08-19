let { functionExercise } = require('../exercicios/Exercicios');

describe('functionExercise', () => {
  it('Should be return', () => {
    functionExercise = jest.fn().mockReturnValue(10);

    expect(functionExercise()).toBe(10);
    expect(functionExercise).toHaveBeenCalled();
    expect(functionExercise).toHaveBeenCalledTimes(1);
  });
});