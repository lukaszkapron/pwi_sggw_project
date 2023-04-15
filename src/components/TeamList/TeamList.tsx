import React from 'react'
import './TeamList.css'
import { Team } from '../../Types';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";



type TeamProps = {
    teamsList: Team[]
}


const TeamList: React.FC<TeamProps> = (props: TeamProps) => {


    var teamList = props.teamsList.map(team =>
        <Link to={'/TeamPage/' + team.teamID} state={{id: team.teamID}}> <button className='teamContainerButton' >
            <div className='row-span-2'>
                <img src={team.logo} alt="logo" className='logo' />
            </div>
            <div className='prop column-span-2'>
                <h4>Team name:</h4>
            </div>
            <div className='prop column-span-2'>
                <h4>League:</h4>
            </div>
            <div className='prop'>
                <h4>First color:</h4>
            </div>
            <div className='prop'>
                <h4>Second color:</h4>
            </div>
            <div className='column-span-2 teamName'>
                <p>{team.teamName}</p>
            </div>
            <div className='column-span-2 leagueName'>
                <p>{team.leagueName}</p>
            </div>
            <div className='color'>
                <div style={{ backgroundColor: team.color1 }} className='colorValue'></div>
            </div>
            <div className='color'>
                <div style={{ backgroundColor: team.color2 }} className='colorValue'></div>
            </div>
        </button></Link>
    )

    return (
        <div>
            {teamList}
        </div>
    )
}

export default TeamList