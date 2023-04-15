import './Navbar.css'
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";


const Navbar = () => {

  return (
    <div>
        <nav>
          <ul>
            <li className="left"><Link to='pwi_sggw_zad04/'>Home</Link></li>
            <li><Link to='pwi_sggw_zad04/CreateTeam'>Create Team</Link></li>
            <li><Link to='pwi_sggw_zad04/MyTeams'>My Teams</Link></li>
            <li className="right"><Link to='pwi_sggw_zad04/Login'>Login</Link></li>
            <li><Link to='pwi_sggw_zad04/Signup'>Sign up</Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar