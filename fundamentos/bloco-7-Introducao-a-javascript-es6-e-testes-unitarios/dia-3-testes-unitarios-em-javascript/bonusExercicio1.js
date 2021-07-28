function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;
  if (payable > paid) {
    throw new Error ('paid value is not enough');
  } else {
    for (let i of coins) {  
      if(remaining - i >= 0 && i >= 2) {
        remaining = remaining - i;
        change.push(i);
      } else if ( remaining / 2 === 1) {
        change.push(2);
      } else if (remaining / 1 === 1) {
        change.push(1);
      }
    }
  }


  // escreva seu código aqui...

  return change;
}

const assert = require('assert');
const { error } = require('console');

let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepStrictEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepStrictEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepStrictEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepStrictEqual(result, expected);

assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);