/*
  Problem definition
  => Clock shows h hours, m minutes and s seconds after midnight.

  Your task is to write a function which returns the time since midnight in milliseconds.

  Algorithms
  - convert hours to miliseconds
  - convert miniuts to miliseconds
  - convert seconds to miliseconds
  - then add them all
  - make sure that hours from 0 to 23 & minutes from 0 to 60 & second from 0 to 60
*/

function past(h, m, s) {
  if (h < 0 || h > 23 || m < 0 || m > 60 || s < 0 || s > 60) {
    console.log("Enter correct time");
    return;
  }

  return (h * 3600 + m * 60 + s) * 1000;
}

console.log(past(0, 60, 60));

// Note from h to miliseconds = h * 60 * 60 * 1000;
// Note from m to miliseconds = m * 60 * 1000;
// Note from s to miliseconds = s * 1000;
