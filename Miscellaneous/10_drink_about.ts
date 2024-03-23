/*
  Problem definition
  => Kids drink toddy.
    Teens drink coke.
    Young adults drink beer.
    Adults drink whisky.
    Make a function that receive age, and return what they drink.

    Rules:
    Children under 14 old.
    Teens under 18 old.
    Young under 21 old.
    Adults have 21 or more.


    Algorithm
    - check age if age < 14 then return drink toddy
    - age > 14 && < 18 then return drink coke
    - age > 18 < 21 then return drink beer
    - age > 21 then return drink whisky
*/
export function peopleWithAgeDrink(age: number): string {
  if (age >= 0 && age < 14) return "drink toddy";
  else if (age >= 14 && age < 18) return "drink coke";
  else if (age >= 18 && age < 21) return "drink beer";
  else if (age >= 21 && age < 100) return "drink whisky";
  else return "Enter correct age";
}

// Tests
// console.log(peopleWithAgeDrink(13));
// console.log(peopleWithAgeDrink(17));
// console.log(peopleWithAgeDrink(18));
// console.log(peopleWithAgeDrink(20));
// console.log(peopleWithAgeDrink(30));
