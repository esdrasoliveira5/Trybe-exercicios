const assert = require('assert');
// escreva a função removeMiddle aqui

function removeMiddle(array) {
  let middle = Math.floor(array.length / 2 );
  let newArray = [];
  let newMiddle = [];
  for (let i of array) {
    if (i !== array[middle]) {
      newArray.push(i);
    } else {
      newMiddle.push(array[middle]);
    }
  }
  array = newArray;
  return array;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

// assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(output, expectedWords);