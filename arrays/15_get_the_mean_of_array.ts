/*
  Problem definition
  => It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

  Return the average of the given array rounded down to its nearest integer.

  The array will never be empty.

  Algorithms
  - to get the average we need to sum all numbers inside array then divide them by the number of elements inside array

*/
export function getAverage(marks: number[]): number {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  let average = Math.trunc(sum / marks.length);
  return average;
}

// Another method using reduce
export function getAverage2(marks: number[]): number {
  return (
    marks.reduce((acc, curr) => {
      return acc + curr;
    }, 0) / marks.length
  );
}
