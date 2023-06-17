import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/Pages/Login/Login';
import Signup from '../src/Pages/Signup/Signup';
import CreateTeam from '../src/Pages/CreateTeam/CreateTeam';
import Home from './Pages/Home/Home';
import CookieConsent from "react-cookie-consent";
import { useTranslation } from "react-i18next";


function App() {
  const { t } = useTranslation();
  
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
        <CookieConsent
          enableDeclineButton
          onDecline={() => {
            alert(t("Alert"));
          }}
          cookieName="cookies"
          buttonText={t("CookiesButtonText")}
          declineButtonText ={t("CookiesDeclineButtonText")}>
          {t("CookiesInfo")}
        </CookieConsent>
      </div>
    </Router>

  );
}

export default App;
