/*
  Problem definition
  => our task is to create a function that does four basic mathematical operations.

  The function should take three arguments - operation(string/char), value1(number), value2(number).
  The function should return result of numbers after applying the chosen operation.

  Algorithm
  - check type of operation then add, subtract, muliply or divide according to operation type
*/

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      console.log("Enter correct operation");
  }
}

console.log(basicOp("+", 4, 7));
