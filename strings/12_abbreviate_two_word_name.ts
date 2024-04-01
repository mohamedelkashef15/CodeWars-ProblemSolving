/*
  Problem definition
  => Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

  Algorithm
  - split string by space 
  - return first char then covert it into uppercase from each word
  - then join it with dot (.) 
*/
export function abbrevName(name: string): string {
  return name
    .split(" ")
    .map((ele: string) => {
      return ele[0].toUpperCase();
    })
    .join(".");
}
