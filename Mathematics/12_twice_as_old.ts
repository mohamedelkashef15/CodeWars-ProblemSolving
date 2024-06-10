/*
  Problem definition:
  => Your function takes two arguments:
    current father's age (years)
    current age of his son (years)
    Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

  Algorithms:
  - عمر الأب لما كان قد عمر الأبن مرتين
*/

export function twiceAsOld(dadYearsOld: number, sonYearsOld: number): number {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}
