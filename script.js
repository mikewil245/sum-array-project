let arr = [2, 3, 99];
let emptyArr = [];
let mixedArr = [0, -5, 10, -10, 5];

function sumOfNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

console.log(sumOfNumbers(mixedArr));
