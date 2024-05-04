/*
  Problem definition
  => Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

  - Algorithms
  - create newString variable and store health - damage
  - Note that health cannot be less than 0 
*/

export function combat(health: number, damage: number): number {
  const result = health - damage;
  if (result > 0) return result;
  else return 0;
}

// Using ternary orperator

export function combat2(health: number, damage: number): number {
  return health < damage ? 0 : health - damage;
}

console.log(combat(20, 30));
console.log(combat2(20, 30));
