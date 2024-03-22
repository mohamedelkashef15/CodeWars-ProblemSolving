/*
  Problem definition 
  => In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

  Algorithms
  - check if num is positive then return negative 
  - else return nothing 
*/

function makeNegative(num) {
  return num > 0 ? -num : num;
}
