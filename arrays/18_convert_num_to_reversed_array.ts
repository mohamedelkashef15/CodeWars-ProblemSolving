/*
  Problem definition
  => Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

  Alogrithms
  - create new empty array 
  - store numbers inside array
  - split array
  - return reversed numbers
*/

export const digitize = (n: number): number[] => {
  let newStr = n.toString();
  let newArr = [];
  for (let i = 0; i < newStr.length; i++) {
    newArr.push(+newStr[i]);
  }

  return newArr.reverse();
};

// Using map
export const digitize2 = (n: number): number[] => {
  return [...n.toString()].map((num) => +num).reverse();
};
console.log(digitize(35231));
console.log(digitize2(35231));
