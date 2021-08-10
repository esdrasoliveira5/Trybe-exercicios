const newEmployees = (callBack) => {
  const employees = {
    id1: callBack('Pedro Guerra'), 
    id2: callBack('Luiza Drumond'),
    id3: callBack('Carla Paiva'), 
  }
  return employees;
};

const generateEmployees = (nome) => o = {
  nomeCompleto: nome,
  email: `${nome.toLowerCase().split(' ').join('_')}@trybe.com`
};

const assert = require('assert'); 
assert.strictEqual(newEmployees(generateEmployees), []);
