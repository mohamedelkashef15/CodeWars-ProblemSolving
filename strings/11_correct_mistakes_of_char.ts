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
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") {
      s[i] = "S";
    }
  }
  return s;
}
