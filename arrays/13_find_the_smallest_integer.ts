/*
  Problem definition
  => Given an array of integers your solution should find the smallest integer.

  Algorithms
  - Loop through entire elements inside array
  - compare first element with second one 
  - if args[0] greater than args[1] let args[0] equals args[1] 
  - return args[0]
*/

export function findSmallestInt(args: number[]): number {
  for (let i = 0; i < args.length - 1; i++) {
    if (args[0] > args[i + 1]) {
      args[0] = args[i + 1];
    }
  }
  return args[0];
}

// Using Math.min()
export function findSmallestInt2(args: number[]): number {
  return Math.min(...args);
}
