export interface Team  {
    teamID: string,
    teamName: string,
    leagueName: string,
    logo: string,
    color1: string,
    color2: string,
    leagueMatchesWon: number,
    leagueMatchesDraw: number,
    leagueMatchesLose: number,
    nonLeagueMatchesCount: number,
    captain: string,
    lastLeagueMatchResult: string
}

export interface Player {
    name: string,
    position: string,
    matches: number,
    goals: number,
    assists: number,
    mvp: number
}
