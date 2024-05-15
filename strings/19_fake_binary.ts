/*
  Problem Definition
  => Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

  Note: input will never be an empty string

  Algorithms:
  - check if digit inside string is less than 5 return 0
  - else if digit more than 5 return 1
*/

function fakeBin(x: string): string {
  return x
    .split("")
    .map((ele) => (+ele < 5 ? "0" : "1"))
    .join("");
}
console.log(fakeBin("45385593107843568"));
