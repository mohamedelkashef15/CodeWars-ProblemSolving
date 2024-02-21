/*
  Problem definition
  => Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.

  Algorithm
  - loop through each charcter 
  - check if charcter is lowercase then turn it into uppper case 
  - check if character is uppercase then turn it into lower case

*/
String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((char) => {
      return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    })
    .join("");
};

console.log("hello".toAlternatingCase());
