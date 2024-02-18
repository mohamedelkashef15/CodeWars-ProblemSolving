/*
  Problem Definition
  =>  Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

  Algorthim
  1- loop on each charcter in word (string)
  2- create new variable called newStr
  3- store inside this variable original string characters without first & last characters

  4- check if index of string not equals 0 && index of string not equals str.length -1 then add chacters inside newStr
*/

// Method 1
function removeChar(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i !== 0 && i !== str.length - 1) {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(removeChar("Hello"));

// Method 2
const removeChar2 = (str) => str.slice(1, -1);
