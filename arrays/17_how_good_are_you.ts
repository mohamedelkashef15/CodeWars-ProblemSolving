/*
  Problem definition
  => There was a test in your class and you passed it. Congratulations!
  But you're an ambitious person. You want to know if you're better than the average student in your class.
  You receive an array with your peers' test scores. Now calculate the average and compare your score!
  Return true if you're better, else false!

  Algorithms
  - calculate the average of classPoints 
  - compare between average number and person number
  - check if it's higher than average number return true otherwise return false

*/
export function betterThanAverage(classPoints: number[], yourPoints: number): boolean {
  let sum = 0;
  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];
  }
  const average = sum / classPoints.length;
  return yourPoints > average;
}

console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50));
