import React from 'react'
import TeamList from '../../components/TeamList/TeamList';
import './MyTeams.css'
import { Team } from '../../Types';


const MyTeams = () => {

  const [teamsList, setTeamsList] = React.useState<Team[]>(
    [
      {
        teamID: "1",
        teamName: "Najlepszy klub",
        leagueName: "La Liga",
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png',
        color1: "red",
        color2: "blue",
        leagueMatchesWon: 235532,
        leagueMatchesDraw: 443242324,
        leagueMatchesLose: 23,
        nonLeagueMatchesCount: 444,
        captain: "Łukasz Kaproń",
        lastLeagueMatchResult: "6:3"
      },
      {
        teamID: "2",
        teamName: "Atojestnajgorszyklub",
        leagueName: "Amatorska",
        logo: 'https://assets.stickpng.com/images/584a9b47b080d7616d298778.png',
        color1: "white",
        color2: "yellow",
        leagueMatchesWon: 1111,
        leagueMatchesDraw: 22,
        leagueMatchesLose: 333333333,
        nonLeagueMatchesCount: 4444444,
        captain: 'Jakiś słabiak to jest',
        lastLeagueMatchResult: "6:4"
      },
      {
        teamID: "3",
        teamName: "ABC",
        leagueName: "XYX",
        logo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Flogos-world.net%2Fbarcelona-logo%2F&psig=AOvVaw3tNV1dCS-D8BPtgikTqIyB&ust=1679671742199000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKizwP-u8v0CFQAAAAAdAAAAABAD',
        color1: "orange",
        color2: "black",
        leagueMatchesWon: 0,
        leagueMatchesDraw: 1,
        leagueMatchesLose: 2,
        nonLeagueMatchesCount: 3,
        captain: "TFG",
        lastLeagueMatchResult: "6:4"
      }
    ]
  );


  return (
    <div className="myTeams-list">
      <h1>My Teams</h1>
      <div className="content">
        <div>
          <TeamList teamsList={teamsList} />
        </div>
      </div>
    </div>
  )
}

export default MyTeams