const assert = require('assert');

const obj1 = {
  description: 'My Description',
  title: 'My Title',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui

function compareObj(objeto1) {
  return objeto1;
};

assert.deepStrictEqual(compareObj(obj1), obj2);
