/*
  Problem definition
  => Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

  The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. 

  Algorithms
  - check if vacation is false && Not employed then return false
  - check if vacation is false && employed then return true
*/

export function setAlarm(employed: boolean, vacation: boolean): boolean {
  if (employed === true && vacation === true) {
    return false;
  } else if (employed === true && vacation === false) {
    return true;
  } else if (employed === false && vacation === false) {
    return false;
  }
  return false;
}
