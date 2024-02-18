/*
  Problem definition
  => Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

  - Algorithms
  1- create for loop which print string n times
*/

// Method 1
function repeatStr(n, s) {
  let newStr = "";
  for (let i = 0; i < n; i++) {
    newStr += s;
  }

  return newStr;
}

console.log(repeatStr(3, "hello"));

// Method 2 Using repeat
const repeatStr2 = (n, s) => s.repeat(n);

console.log(repeatStr2(3, "Welcome"));
