/*
 - Problem description: 
 => This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.


- Algorithms
  1- Check if number is even or odd 
  2- if number is even then multiply it by 8 
  3- else (odd) multiply number by 9
*/

function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8);
}
