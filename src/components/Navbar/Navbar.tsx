import './Navbar.css'
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import React from 'react'

const Navbar = () => {

    const [isActive, setIsActive] = React.useState(false);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setIsActive(!isActive);
    };

  return (
    <div>
      <nav>
        <ul className="list">
          <li className="left"><Link to='/'>Home</Link></li>
          <li><Link to='/CreateTeam'>Create Team</Link></li>
          <li className="right"><Link to='/Login'>Login</Link></li>
          <li><Link to='/Signup'>Sign up</Link></li>
        </ul>
        <div className='mobileNav'>
          <li className="leftHome"><Link to='/'>Home</Link></li>
          <button className='hamburger' onClick={(e) => handleClick(e)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>
      <ul className={isActive ? 'listMobile' : 'listb'}>
          <li><Link to='/Login'>Login</Link></li>
          <li><Link to='/Signup'>Sign up</Link></li>
          <li><Link to='/CreateTeam'>Create Team</Link></li>
        </ul>
    </div>
  )
}

export default Navbar