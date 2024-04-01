/*
  Problem definition
  => Return the Nth Even Number

  Example(Input --> Output)
  
*/
export function nthEven(n: number): number {
  return Math.floor(n * 2 - 2);
}

// Tests
console.log(nthEven(3));
console.log(nthEven(100));
console.log(nthEven(1298734));
