/*
  Problem definition
  => Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

  Example: (Input1, Input2 -->Output)
*/

export function sumStr(a: string, b: string): string {
  return `${+a + +b}`;
}

console.log(sumStr("9", "1"));
