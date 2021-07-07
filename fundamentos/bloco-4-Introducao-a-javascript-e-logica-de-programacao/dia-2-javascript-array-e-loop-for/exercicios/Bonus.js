
function ascendingOrder(numbers) {
  for (let i = 1; i < numbers.length; i += 1) {
    for (let i2 = 0; i2 < i; i2 += 1) {
     if (numbers[i] < numbers[i2]) {
       let position = numbers[i];
       numbers[i] = numbers[i2];
       numbers[i2] = position;
     }
    }
  }
  console.log(numbers);
}

function descendingOrder(numbers) {
  for (let i = 1; i < numbers.length; i += 1) {
    for (let i2 = 0; i2 < i; i2 += 1) {
     if (numbers[i] > numbers[i2]) {
       let position = numbers[i];
       numbers[i] = numbers[i2];
       numbers[i2] = position;
     }
    }
  }
  console.log(numbers);
}

function multiOrder(numbers) {
  let multi = [];
  for (let i = 1; i <= numbers.length; i += 1) {
    for (let i2 = i - 1 ; i2 < i; i2 += 1) {
      if (i === numbers.length) {
        multi.push(numbers[numbers.length -1] * 2);
      } else {
        multi.push(numbers[i] * numbers[i2]);
      }
    }
  }
  console.log(multi);
}

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
multiOrder(numbers);

