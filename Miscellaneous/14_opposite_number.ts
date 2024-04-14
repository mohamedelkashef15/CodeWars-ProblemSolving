/*
  Problem definition
  => Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).


*/
export class Kata {
  static opposite(n: number): number {
    return -n;
  }
}

console.log(Kata.opposite(1));
console.log(Kata.opposite(14));
console.log(Kata.opposite(-34));
