/*
  Problem definition
  => Messi is a soccer player with goals in three leagues:

  LaLiga
  Copa del Rey
  Champions
  Complete the function to return his total number of goals in all three leagues.
*/

export function goals(laLigaGoals: number, copaDelReyGoals: number, championsLeagueGoals: number): number {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

console.log(goals(5, 10, 2));
