/*
  Problem definition
  => Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

  If no occurrences can be found, a count of 0 should be returned.

  - Algorithms
  1- create a variable called counter and set it's value equal zero
  2- loop through each charcter inside string 
  3- check if letter equals charcter of string then increment counter with 1 
  4- return value of coutner
*/

// Method 1
function strCount(str, letter) {
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      counter++;
    }
  }
  return counter;
}

// Using Split
const strCount2 = (str, letter) => str.split(letter).length - 1;
