/*
  Problem definition
  => I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

  P.S. Each array includes only integer numbers. Output is a number too.

  Algorithm
  - create sum variable = 0
  - loop through each array sum two arrays 
*/

export const arrayPlusArray = (arr1: number[], arr2: number[]): number => {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) sum += arr1[i];
  for (let i = 0; i < arr2.length; i++) sum += arr2[i];
  return sum;
};

// Use reduce method
export const arrayPlusArray2 = (arr1: number[], arr2: number[]): number => {
  let sumArrayOne = arr1.reduce((acc, current) => {
    return acc + current;
  }, 0);

  let sumArrayTwo = arr2.reduce((acc, current) => {
    return acc + current;
  }, 0);

  return sumArrayOne + sumArrayTwo;
};

// Better Solution Using reduce
export const arrayPlusArray3 = (arr1: number[], arr2: number[]): number => {
  return [...arr1, ...arr2].reduce((acc, current) => acc + current);
};

console.log(arrayPlusArray([1, 2, 3], [1, 2, 3]));
console.log(arrayPlusArray2([1, 2, 3], [1, 2, 3]));
console.log(arrayPlusArray3([1, 2, 3], [1, 2, 3]));
