/*
  Problem definition
  => Create a method to see whether the string is ALL CAPS.

  Algorithms 
  - loop through each char 
  - check if one char is lower case then return false else return true 
*/

String.prototype.isUpperCase = function () {
  return this.valueOf() === this.toUpperCase();
};

function isAllCaps(str) {
  return str === str.toUpperCase();
}
