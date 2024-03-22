/*
  Problem definition
  => I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.


*/

function swapValues(args) {
  let temp = args[0];
  args[0] = args[1];
  args[1] = temp;
  return args;
}
