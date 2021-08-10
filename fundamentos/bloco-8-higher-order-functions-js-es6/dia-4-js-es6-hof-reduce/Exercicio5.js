const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((total, name) => total + name.split('').filter((letter) => letter.toLocaleLowerCase() === 'a').length, 0)
}

assert.deepStrictEqual(containsA(), 20);