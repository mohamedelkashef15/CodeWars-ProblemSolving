/*
  Problem definition
  => You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

  Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

  Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics
*/

export function fixTheMeerkat(arr: string[]): string[] {
  return arr.reverse();
}

// Another solution by changing index
export function fixTheMeerkat2(arr: string[]): string[] {
  let temp = arr[0];
  arr[0] = arr[2];
  arr[2] = temp;

  return arr;
}

console.log(fixTheMeerkat(["tails", "body", "heads"]));
console.log(fixTheMeerkat2(["tails", "body", "heads"]));
