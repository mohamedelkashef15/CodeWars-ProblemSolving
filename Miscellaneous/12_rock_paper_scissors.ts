/*
  Problem definition
  => Let's play! You have to return which player won! In case of a draw return Draw!.

  Examples(Input1, Input2 --> Output):

  "scissors", "paper" --> "Player 1 won!"
  "scissors", "rock" --> "Player 2 won!"
  "paper", "paper" --> "Draw!"

  Algorithms
  P1 win cases
    - check if p1 is scissors and p2 is paper then p1 wins
    - check if p1 is rock and p2 is scissors then p1 wins
    - check if p1 is paper and p2 is rock then p1 wins
  
  P2 win cases
    - check if p2 is scissors and p1 is paper then p2 wins
    - check if p2 is rock and p1 is scissors then p2 wins
    - check if p2 is paper and p1 is rock then p2 wins 
*/

// Method 1
export function rps(p1: string, p2: string): string {
  if ((p1 === "scissors" && p2 === "paper") || (p1 === "rock" && p2 === "scissors") || (p1 === "paper" && p2 === "rock"))
    return "Player 1 won!";
  if ((p2 === "scissors" && p1 === "paper") || (p2 === "rock" && p1 === "scissors") || (p2 === "paper" && p1 === "rock"))
    return "Player 2 won!";
  if (p1 === p2) return "Draw!";

  return "Enter correct input";
}

// Method 2
export function rps2(p1: string, p2: string): string {
  const rules: Record<string, string> = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  console.log(rules["scissors"]);
  if (p1 === p2) return "Draw!";
  if (p1 === rules[p2]) return "Player 2 won!";
  if (p2 === rules[p1]) return "Player 1 won!";

  return "Enter correct input";
}
// secissors = paper
console.log(rps2("scissors", "paper"));
console.log(rps("scissors", "paper"));
