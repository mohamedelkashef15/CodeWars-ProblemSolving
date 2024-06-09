/*
  Problem definition
  => Write a function to split a string and convert it into an array of words.

  Algorithm
  - loop through each letter
  - check if letter is empty space then add string into array 
  - let newStr to empty string 
*/

export function stringToArray(s: string) {
  let newArr = [];
  let newStr = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      newArr.push(newStr);
      newStr = "";
    }
    newStr += s[i];
  }
  newArr.push(newStr);
  return newArr;
}

console.log(stringToArray("Robin Singh"));

// Using split method
export function stringToArray2(s: string): string[] {
  return s.split(" ");
}

// console.log(stringToArray2("Robin Singh"));
