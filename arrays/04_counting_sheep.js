/*
  Problem definition
  => Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

  Algorithm
  - create a count variable and set it to 0 
  - loop through items
  - check if item is true then increment count by 1
  - if item is false then donothing 
  - return number of true values
*/

function countSheeps(sheep) {
  let count = 0;
  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i] === true) count++;
  }
  return count;
}

// another solution
function countSheeps2(sheep) {
  return sheep.filter(Boolean).length;
}
