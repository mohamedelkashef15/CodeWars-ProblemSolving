/*
  Problem definition
  => Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).


  Algorithms
  - take the number from the argument then multiply it by 2 
  - store it inside array 
  - 
*/

export function powersOfTwo(n: number): number[] {
  let newArr = [];
  for (let i = 0; i <= n; i++) {
    newArr.push(2 ** i);
  }

  return newArr;
}

console.log(powersOfTwo(4));
/*
  [1]
  1 
  2 ** 2 = 4
  2 * 2 = 4
  2 * 3 = 6
*/
