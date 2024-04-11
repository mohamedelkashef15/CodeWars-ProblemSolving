/*
  Problem definition
  => You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

  As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

  Algorithms
  - print array of numbers till the given number
*/

export function monkeyCount(n: number): number[] {
  let arr: number[] = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(monkeyCount(5));
