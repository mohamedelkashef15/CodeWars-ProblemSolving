/*
  Problem definition
  => A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

  Return true if yes, false otherwise :)

  Algorithms
  - check if n of bullets < dragons * 2 then return false
  - else return true
*/

export function hero(bullets: number, dragons: number): boolean {
  return bullets >= dragons * 2;
}

// Using Arrow function
const hero2 = (bullets: number, dragons: number): boolean => bullets >= dragons * 2;

console.log(hero(10, 5));
console.log(hero(7, 4));
console.log(hero(4, 5));
