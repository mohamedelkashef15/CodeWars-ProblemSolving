/*
  Problem definition
  => Given a number n, return the number of positive odd numbers below n, EASY!

  Algorithm
  - loop through all numbers till n
  - start to count numbers that are positive odd numbers
  - return results
*/

// Method 1 O(n)
function oddCount(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (i % 2) {
      count++;
    }
  }
  return count;
}

// Method 2 O(1)
function oddCount2(n) {
  return Math.floor(n / 2);
}
