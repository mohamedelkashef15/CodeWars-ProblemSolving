/*
  Problem definition
  => You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

  The returned value must be a string, and have "***" between each of its letters.

  You should not remove or add elements from/to the array.

  - Algorithms
  1- sort given array using method sort Alphabitcally
  2- split letters from first item inside array 
  3- join between each letter three stars(***)
*/

export function twoSort(s: string[]) {
  return s.sort()[0].split("").join("***");
}

// Test Cases
console.log(
  twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])
);
