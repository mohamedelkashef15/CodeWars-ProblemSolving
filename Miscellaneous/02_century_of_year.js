/*
  Problem description 
  => The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

  - Algorithms
    1- return year/100
    2- use Math.ceil to increment number to up
*/

const century = (year) => Math.ceil(year / 100);

console.log(century(1601));
console.log(century(2000));
