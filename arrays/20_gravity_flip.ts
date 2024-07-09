/*
  Problem definition
  => Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.

  There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

  Alogrithms
  - check if direction is "R" then sort numbers inside array in accending order
  - check if direction is "L" then sort numbers inside array in decending order
*/

export function flip(dir: string, arr: number[]) {
  if (dir === "R") return arr.sort();
  else if (dir === "L") return arr.sort().reverse();
  return "Enter a correct dir";
}

// Another solution using teranry operator
export function flip2(dir: string, arr: number[]) {
  return dir === "R" ? arr.sort((a, b) => a - b) : dir === "L" ? arr.sort((a, b) => b - a) : "Enter a correct dir";
}
