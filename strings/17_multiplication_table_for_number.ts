/*
  Problem defintion
  => Your goal is to return multiplication table for number that is always an integer from 1 to 10.
*/

export function multiTable(number: number): string {
  let result = "";
  for (let i = 1; i <= 10; i++) {
    result += `${i} * ${number} = ${i * number}${i !== 10 ? "\n" : ""}`;
  }
  return result;
}

// console.log(multiTable(5));

// Using Array.from
export function multiTable2(number: number): string {
  return Array.from({ length: 10 }, (_, i) => `${i + 1} * ${number} = ${i + 1 * number}`).join("\n");
}
