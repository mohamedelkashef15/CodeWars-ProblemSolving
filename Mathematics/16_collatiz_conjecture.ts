/*
  Problem definition
  => The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

  [This is writen in pseudocode]
  if(number is even) number = number / 2
  if(number is odd) number = 3*number + 1
  
  *Task
  Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

  Algorithms
  - create counter and set it to 0
  - increment counter by 1 till "n" becomes 1
*/

const hotpo = function (n: number) {
  let counter = 0;
  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    counter++;
  }
  return counter;
};

console.log(hotpo(5));

/*
  n == 5
  5 => 3 * 5 + 1 = 16
  16/ 2
  4
  2
  1/2

*/
