/*
  Problem definition
  => You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

  Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

  For example, when the input is green, output should be yellow.

  Algorithms
  - 
*/

export function updateLight(current: string): string {
  if (current === "green") return "yellow";
  else if (current === "yellow") return "red";
  else if (current === "red") return "green";
  return "Enter correct trafic light";
}

// using ternary operator
export function updateLight2(current: string): string {
  return current === "green"
    ? "yellow"
    : current === "yellow"
    ? "red"
    : current === "red"
    ? "green"
    : "Enter correct trafic light";
}

// Using objects
// interface ILights {
//   green: string;
//   yellow: string;
//   red: string;
// }

type lightColor = "green" | "yellow" | "red";

const lights = {
  green: "yellow",
  yellow: "red",
  red: "green",
};

const updateLight3 = (current: lightColor): string => {
  return lights[current];
};

console.log(updateLight("green"));
console.log(updateLight2("red"));
console.log(updateLight3("green"));
