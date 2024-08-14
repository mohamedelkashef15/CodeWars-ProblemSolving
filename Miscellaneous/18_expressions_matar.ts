/*
  Problem definition
  - Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()

  - In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)

  Algorithms
  
*/

export function expressionsMatter(a: number, b: number, c: number): number {
  const res1 = a * (b + c);
  const res2 = a * b * c;
  const res3 = a + b * c;
  const res4 = (a + b) * c;

  return Math.max(res1, res2, res3, res4);
}

console.log(expressionsMatter(1, 2, 3));
