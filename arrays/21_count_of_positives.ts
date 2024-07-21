/*
  Problem definition
  => Given an array of integers.
  Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

  If the input is an empty array or is null, return an empty array.

  Algorithms
  - loop through each element inside array 
  - check if number is positive then increase the count by 1 
  - if number is negative then add it to sum then return result in array 
*/

export function countPositivesSumNegatives(input: number[]) {
  let count = 0;
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    input[i] > 0 ? count++ : (sum += input[i]);
  }
  return [count, sum];
}

console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));
