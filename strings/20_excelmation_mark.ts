/*
  Problem definition
  => Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

  Algorithms
  - loop on letter inside string
  - then loop on all elements inside vowel array
  - check if letter equals one of vowel then return "!"
  - otherwise return letter
*/

// const vowel = ["a", "e", "i", "o", "u"];

// function replace(s: string): string {
//   let newStr = "";
//   for (let i = 0; i < s.length; i++) {
//     for (let j = 0; j < vowel.length; j++) {
//       if (s[i].toLowerCase() === vowel[j]) {
//         newStr += "!";
//       }
//     }
//     if (s[i].toLowerCase() !== vowel[j]) {
//       newStr += s[i];
//     }
//   }
//   return newStr;
// }

// console.log(replace("Hi"));
// console.log(replace("aeiou"));
// console.log(replace("ABCDE"));
