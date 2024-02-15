/*
  Problem defintion
  => We need a function that can transform a string into a number. What ways of achieving this do you know?

  To convert String into number (Three methods)
  - Unery operator 
  - parseInt
  - number constructor
*/

// Using Unery Opertor
const stringToNumber = (str) => +str;

// Using Parse Int
const stringToNumber2 = (str) => parseInt(str);

// Using Number Constructor
const stringToNumber3 = (str) => Number(str);
