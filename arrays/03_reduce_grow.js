/*
  Problem definition
  => Given a non-empty array of integers, return the result of multiplying the values together in order. 

  - Algorithms
  - loop through each number inside array 
  - multiply theose numbers
*/

function grow(x) {
  let sum = 1;
  for (let i = 0; i < x.length; i++) {
    sum *= x[i];
  }

  return sum;
}
console.log(grow([1, 2, 3, 4]));

// using reduce

const grow2 = (x) => x.reduce((product, num) => product * num, 1);

console.log(grow2([1, 2, 3, 4]));
