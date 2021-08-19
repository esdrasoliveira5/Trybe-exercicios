const service = require('../exemplos/service');

test('#randomRgbColor', () => {
  // testando se a função foi chamada
  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
});