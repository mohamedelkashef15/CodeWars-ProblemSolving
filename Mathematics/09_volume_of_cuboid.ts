/*
  Problem definition
  => Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

  Algorithms
  - Since volume of cuboid is length * width * height
*/

export function getVolumeOfCuboid(length: number, width: number, height: number): number {
  return length * width * height;
}

console.log(getVolumeOfCuboid(6.3, 2, 5));
console.log(getVolumeOfCuboid(1, 2, 2));
