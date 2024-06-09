/*
  Problem definition
  => Have the function StringChallenge(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome. For example: "Anne, I vote more cars race Rome-to-Vienna" should return true.


  Algorithms
  - replace all non-alphanumeric characters with empty string "" 
  - convert all charcters into lower case
  - loop through string charcters from begining and from end 
  - check if char[index] of begining loop not equals char[index] of ending loop then return false and stop the program
  - other wise return true
*/

function StringChallenge(str) {
  const cleanStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  for (let i = 0, j = cleanStr.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;
}

// // console.log(StringChallenge("Noel - sees Leon"));
function StringChallenge(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  // Check if the cleaned string is a palindrome
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr ? "true" : "false";
}

// // Test cases
// console.log(StringChallenge("Anne, I vote more cars race Rome-to-Vienna")); // Output: true
console.log(StringChallenge("Noel - sees Leon")); // Output: false
console.log(StringChallenge("Noel - sees Leon")); // Output: false
