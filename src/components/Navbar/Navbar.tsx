import './Navbar.css'
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Login from '../../Pages/Login/Login';
import Signup from '../../Pages/Signup/Signup';
import CreateTeam from '../../Pages/CreateTeam/CreateTeam';
import MyTeams from '../../Pages/MyTeams/MyTeams';


const Navbar = () => {

  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li className="left"><Link to='/'>Home</Link></li>
            <li><Link to='/CreateTeam'>Create Team</Link></li>
            <li><Link to='/MyTeams'>My Teams</Link></li>
            <li className="right"><Link to='/Login'>Login</Link></li>
            <li><Link to='/Signup'>Sign up</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/CreateTeam' element={<CreateTeam />}></Route>
          <Route path='/MyTeams' element={<MyTeams />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Signup' element={<Signup />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default Navbar