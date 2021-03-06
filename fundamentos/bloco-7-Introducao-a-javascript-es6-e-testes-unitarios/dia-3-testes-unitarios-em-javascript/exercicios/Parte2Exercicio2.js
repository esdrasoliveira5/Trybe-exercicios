const assert = require('assert');
// escreva a função wordLengths aqui
function wordLengths(array) {
  newArrray = [];
  for(let i of array) {
    newArrray.push(i.length);
  }
  return newArrray;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);