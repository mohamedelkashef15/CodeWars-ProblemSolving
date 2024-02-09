/*
  Problem definition: 
  Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

  - Algorithm
  1- create a function that takes boolean value then check if value is true print "Yes" otherwise print "No"
*/

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

console.log(boolToWord(true));
console.log(boolToWord(false));
