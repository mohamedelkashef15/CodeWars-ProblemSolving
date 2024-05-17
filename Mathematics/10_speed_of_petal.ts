/*
  Problem definition:
  => When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.

  Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.

  Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.
  
  Algorithms
  - take speed as input
  - return time spent
  - if speed is 5 cm/sec then time will be 80 second
*/

export function sakuraFall(speed: number): number {
  return speed <= 0 ? 0 : (5 * 80) / speed;
}

console.log(sakuraFall(5));
