/*
  Problem definition
  => In this Kata we are passing a number (n) into a function.
    Your code will determine if the number passed is even (or not).
    The function needs to return either a true or false.
    Numbers may be positive or negative, integers or floats.
    Floats with decimal part non equal to zero are considered UNeven for this kata.

    Algorithm
    - check if number is modules by 2 equals 0 then it's even otherwise it's odd
*/

export const testEven = (n: number): boolean => {
  return n % 2 == 0;
};

// Test Cases
console.log(testEven(0));
console.log(testEven(0.5));
console.log(testEven(1));
console.log(testEven(-4));
console.log(testEven(15));
console.log(testEven(20));
