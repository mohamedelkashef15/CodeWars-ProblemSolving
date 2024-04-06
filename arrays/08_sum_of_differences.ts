/*
  Problem definition
  => Your task is to sum the differences between consecutive pairs in the array in descending order.

  Algorithms
  - rearrange items from decending order
  - arr[]
*/

export function sumOfDifferences(arr: number[]): number {
  let sortedArr = arr.sort((a, b) => b - a);
  let result = 0;
  if (arr.length <= 1) {
    return (result = 0);
  } else {
    for (let i = 0; i < sortedArr.length - 1; i++) {
      result += sortedArr[i] - sortedArr[i + 1];
    }
  }
  return result;
}
