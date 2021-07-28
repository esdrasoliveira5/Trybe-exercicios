const greetPeople = (people) => {
  let greeting = 'Hello ';
  let r = [];
  for (const person in people) {
    r.push(greeting + people[person]);
  }
  return r;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

const assert = require('assert');

assert.deepStrictEqual(greetPeople(parameter), result);

