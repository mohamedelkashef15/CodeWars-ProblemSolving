/*
  Problem definition
  => Complete the square sum function so that it squares each number passed into it and then sums the results together.

  Algorithm
  - create variable sum 
  - loop on each number
  - square numbers then store it in sum variable 
*/

function squareSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] ** 2;
  }
  return sum;
}

// Another solution Using reduce
function squareSum2(numbers) {
  return numbers.reduce((sum, num) => sum + num * num, 0);
}

console.log(squareSum2([1, 2, 2]));
