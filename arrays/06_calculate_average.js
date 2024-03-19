/*
  Problem definition
  => Write a function which calculates the average of the numbers in a given list.

  Note: Empty arrays should return 0.

  Algorithm
  - sum all numbers inside array 
  - take sum then divide it by number of elements inside array 
*/

// Using reduce
function findAverage2(array) {
  if (array.length === 0) return 0;
  else {
    return array.reduce((acc, current) => acc + current, 0) / array.length;
  }
}

console.log(findAverage2([1, 2, 3]));
