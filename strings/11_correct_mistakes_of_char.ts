/*
  Problem definition
  => Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

  When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

  Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

  S is misinterpreted as 5
  O is misinterpreted as 0
  I is misinterpreted as 1
  ---------
  Algorithms
  - loop on characters of the word then
  - check if char is 5 then turn it into S
  - if char is 0 then turn it into O
  - if char is I then turn it into 1 
  - return string 
*/

export function correct(s: string): string {
  return s
    .split("")
    .map((char) => {
      if (char === "5") return "S";
      else if (char === "0") return "O";
      else if (char === "1") return "I";
      else return char;
    })
    .join("");
}

// Using for loop
function correct2(s: string): string {
  let newString = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "5") newString += "S";
    else if (s[i] === "0") newString += "O";
    else if (s[i] === "1") newString += "I";
    else newString += s[i];
  }
  return newString;
}
console.log(correct2("L0ND0N"));

// Using replace method
export function correct3(s: string): string {
  return s.replace("/5/g", "S").replace("/0/g", "O").replace("/1/g", "I");
}
