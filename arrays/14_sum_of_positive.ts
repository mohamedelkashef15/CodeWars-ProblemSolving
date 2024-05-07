/*
  Problem definition
  => You get an array of numbers, return the sum of all of the positives ones.

  Example [1,-4,7,12] => 1 + 7 + 12 = 20

  Note: if there is nothing to sum, the sum is default to 0.

  Algorithms
  - check if number is positive then sum it. other wise do nothing
*/

export function positiveSum(arr: number[]): number {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) sum += arr[i];
  }

  return sum;
}

console.log(positiveSum([1, -2, 3, 4, 5]));

// Using reduce
export function positiveSum2(arr: number[]): number {
  return arr.reduce((acc, curr) => (curr > 0 ? acc + curr : acc));
}
console.log(positiveSum2([1, -2, 3, 4, 5]));
