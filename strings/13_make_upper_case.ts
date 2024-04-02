/*
  Problem definition
  => Write a function which converts the input string to uppercase.

  Algorithms
  - loop through each char then convert it into upper case
*/

// using toUpperCase method
const makeUpperCase = (str: string): string => str.toUpperCase();

// Using map
export function makeUpperCase2(str: string): string {
  return str
    .split("")
    .map((char) => {
      return char.toUpperCase();
    })
    .join("");
}

console.log(makeUpperCase2("hello"));
console.log(makeUpperCase("hello"));
