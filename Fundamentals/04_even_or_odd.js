/*
  Problem description
  Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

  Algorithm
  - check if number % 2 equal 0 then print even otherwise print odd
*/

function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(evenOrOdd(10));
console.log(evenOrOdd(11));
