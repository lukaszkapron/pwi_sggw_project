import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/Pages/Login/Login';
import Signup from '../src/Pages/Signup/Signup';
import CreateTeam from '../src/Pages/CreateTeam/CreateTeam';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/CreateTeam' element={<CreateTeam />}></Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/Signup' element={<Signup />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
