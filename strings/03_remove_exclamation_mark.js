/*
  Problem definition
  => Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

  Algorithms
  - loop through each character 
  - check if chracter is ! then remove it else print it
*/

function removeExclamationMarks(s) {
  let newString = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "!") {
      newString += "";
    } else {
      newString += s[i];
    }
  }
  return newString;
}

console.log(removeExclamationMarks("Hello!"));

// Using map
const removeExclamationMarks2 = (s) => {
  s.split();
  return s
    .split("")
    .map((ele) => {
      return ele.includes("!") ? "" : ele;
    })
    .join("");
};

// Using replaceAll method
const removeExclamationMarks3 = (s) => s.replaceAll("!", "");

console.log(removeExclamationMarks3("hel!!lo!"));
