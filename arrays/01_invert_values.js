/*
  Problem definition
  => Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

  Algorithm
  - loop through each number inside array
  - then multiply that number * -1
  - create new array then store inside it number

  Note: 
    - positive * -1 = negative 
    - negative * -1 = positive 
*/

function invert(array) {
  let invertedArr = [];
  for (let number of array) {
    number *= -1;
    invertedArr.push(number);
  }
  return invertedArr;
}

console.log(invert([1, 2, 3, -4, 5]));

// Using map
const invert2 = function (array) {
  return array.map(function (number) {
    return -number;
  });
};

//* with arrow function
// const invert2 = (array) => array.map((number) => -number);

console.log(invert2([1, 2, 3, 4, 5]));
