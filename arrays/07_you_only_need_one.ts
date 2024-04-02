/*
  Problem definition
  => You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

  Array can contain numbers or strings. X can be either.

  Return true if the array contains the value, false if not.

  Algorithm
  - loop through each item inside array 
  - check if a single item equals x value then return true 
  - otherwise return false
*/

// Using for loop
export const check = (a: (number | string)[], x: number | string): boolean => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === x) return true;
  }
  return false;
};

// Using includes method
export const check2 = (a: (number | string)[], x: number | string): boolean => {
  return a.includes(x);
};

console.log(check([1, 2, 3, 4], 2));
console.log(check([1, 2, 3, 4], 5));
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45));
