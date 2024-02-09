/*
  Problem description
  => Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

  Algorithms
  1- check if n is modulos x && n modulos y equal 0 then return true
  2- else return false
*/

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}

console.log(isDivisible(3, 1, 3));
console.log(isDivisible(100, 5, 3));
