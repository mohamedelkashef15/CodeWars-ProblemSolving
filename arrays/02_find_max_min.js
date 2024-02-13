/*
  Problem definition 
  => Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

  Algorithms 
  - create variable called max & min
  - create a loop on numbers inside array
  - compare between list[0] and list[i+1]
  - FOR MIN
    - if list[0] > list[i + 1] then make list[0] equals list[i+1]
    - store inside min variable list[0]

  - FOR MAX
    - if list[0] < list[i + 1] then make list[0] equals list[i + 1]
    - store inside max variable list[0]
*/

const min = function (list) {
  let min = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[0] > list[i + 1]) {
      list[0] = list[i + 1];
    }
    min = list[0];
  }
  return min;
};

const max = function (list) {
  let max = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[0] < list[i + 1]) {
      list[0] = list[i + 1];
    }
    max = list[0];
  }
  return max;
};

// Another method using Math
const min2 = (list) => Math.min(...list);
const max2 = (list) => Math.max(...list);

// Test Cases
console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([2, 4, -10, 2, -4]));

console.log(min2([-52, 56, 30, 29, -54, 0, -110]));
console.log(max2([-52, 56, 30, 29, -54, 0, -110]));
