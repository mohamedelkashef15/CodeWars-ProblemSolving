/*
  Problem description
  => create a function that pass a string into it then reverse it 

  Algorithms
  1- loop on each letter of the word 
*/

// Solution 1: Looping through each letter
function solution(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

// Solution 2: use reverse method
const solution2 = (str) => str.split("").reverse().join("");
