import './Navbar.css'
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";


const Navbar = () => {

  return (
    <div>
        <nav>
          <ul>
            <li className="left"><Link to='/'>Home</Link></li>
            <li><Link to='/CreateTeam'>Create Team</Link></li>
            <li><Link to='/MyTeams'>My Teams</Link></li>
            <li className="right"><Link to='/Login'>Login</Link></li>
            <li><Link to='/Signup'>Sign up</Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar