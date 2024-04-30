/*
  Problem definition
  => Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

  The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

  Mind the input validation.

  Algorithms
  - sort numbers then remove first and last element
*/

export function sumArray(array: number[]): number {
  if (array.length < 1) return 0;
  array.sort((a, b) => a - b);
  let result = 0;
  for (let i = 1; i < array.length - 1; i++) {
    result += array[i];
  }
  return result;
}

console.log(sumArray([1, 2, 3, 4]));
