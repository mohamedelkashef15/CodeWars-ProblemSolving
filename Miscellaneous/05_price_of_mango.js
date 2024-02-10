/*
  Problem description 
  => There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

  Algorithms
  - create a variable "initalCost" then store quanity * price
  - display offer => if quantity >= 3
  - loop through quanity and decrease it by 3
  - then create discountCost = initial cost - 1 * price on each iteration

  - if quantity less than 3 then return initial cost;
*/

// Solution 1
function mango(quantity, price) {
  let initalCost = quantity * price;
  let discountCost;

  // display offer
  if (quantity >= 3) {
    for (let i = quantity; i >= 3; i -= 3) {
      discountCost = initalCost - 1 * price;
      initalCost = discountCost;
    }
    return discountCost;
  } else {
    // no offer
    return initalCost;
  }
}

// Solution 2
function mango(quantity, price) {
  return price * (quantity - Math.floor(quantity / 3));
}
