/*
  Problem definition
  => Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

  - Algorithms
  - check if value of month from 1 to 12 | if not then stop the program and print enter correct input 

  - check the value of month if it's from 1 to 4(not included) then print quarter 1
  - else if value of month from 4 - 7 then print quarter 2
  - else if value of month from 7 - 10 then print quarter 3
  - else if value of month from 10 - 12 then print quarter 4
*/

const quarterOf = (month) => {
  if (month >= 1 && month <= 12) {
    if (month >= 1 && month < 4) {
      return 1;
    } else if (month >= 4 && month < 7) {
      return 2;
    } else if (month >= 7 && month < 10) {
      return 3;
    } else if (month >= 10 && month <= 12) {
      return 4;
    }
  } else {
    return "Enter correct month";
  }
};

// Better solution
const quarterOf2 = function (month) {
  if (month >= 1 && month <= 12) {
    return `You are in quarter ${Math.ceil(month / 3)}`;
  } else {
    return "Enter correct month";
  }
};

console.log(quarterOf2(10));
