/*
  Problem definition
  => Write a function that removes the spaces from the string, then return the resultant string.

  - Algorithms 
  Method 1
  1- loop through each charcter if char equals empty space then ignore it otherwise store it in a new string

  Method 2
  1- Using replaceAll method
*/

// Method 1
function noSpace(x) {
  let newStr = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== " ") {
      newStr += x[i];
    }
  }
  return newStr;
}

console.log(noSpace("he   ll o"));

// Method2
const noSpace2 = (x) => x.replaceAll(" ", "");

console.log(noSpace2("   he   ll o  "));
