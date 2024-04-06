/*
  Problem definition
  => Your task is to sum the differences between consecutive pairs in the array in descending order.

  Algorithms
  - rearrange items from decending order using sort
  - loop through array and then return arr[i] - arr[i + 1]
*/

export function sumOfDifferences(arr: number[]): number {
  arr.sort((a, b) => b - a);
  let result = 0;
  if (arr.length <= 1) {
    return (result = 0);
  } else {
    for (let i = 0; i < arr.length - 1; i++) {
      result += arr[i] - arr[i + 1];
    }
  }
  return result;
}
