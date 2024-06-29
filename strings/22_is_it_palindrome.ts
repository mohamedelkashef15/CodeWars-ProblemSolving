/*
  Problem definition
  => Write a function that checks if a given string (case insensitive) is a palindrome.

    A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

  - Alogrithms
    - loop on string from start to end
    - loop on string from end to start
    - check if char[index] from start equals char[index] from end
    - if so then return true otherwise return false
*/
export function isPalindrome(x: string): boolean {
  let str = x.toLowerCase();
  for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;
}

// Another way
export function isPalindrome2(x: string): boolean {
  let str = x.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Using methods
export function isPalindrome3(x: string): boolean {
  return x.toLowerCase().split("").reverse().join("") === x.toLowerCase();
}
