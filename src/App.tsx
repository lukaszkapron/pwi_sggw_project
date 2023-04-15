import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Login from '../src/Pages/Login/Login';
import Signup from '../src/Pages/Signup/Signup';
import CreateTeam from '../src/Pages/CreateTeam/CreateTeam';
import MyTeams from '../src/Pages/MyTeams/MyTeams';

function App() {
  return (
    <Router>
      <div>
      <Navbar />   
          <div>
        <Routes>
          <Route path='/pwi_sggw_zad04/CreateTeam' element={<CreateTeam />}></Route>
          <Route path='/pwi_sggw_zad04/MyTeams' element={<MyTeams />}></Route>
          <Route path='/pwi_sggw_zad04/Login' element={<Login />}></Route>
          <Route path='/pwi_sggw_zad04/Signup' element={<Signup />}></Route>
        </Routes>
         </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
