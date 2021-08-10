
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const totalPoints = (correctAnswers, answers, callback) => {
  
  return callback(correctAnswers, answers);
}

const points = (correctAnswers, answers) => {
  let score = 0;
  for (let i = 0; i < correctAnswers.length; i += 1) {
    if (correctAnswers[i] === answers[i]) {
      score += 1;
    } else if (answers[i] === 'N.A') {
      score += 0;
    } else {
      score -= 0.5;
    }
  }
  return score;
}

const assert = require('assert'); 
assert.strictEqual(totalPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, points), 5);

