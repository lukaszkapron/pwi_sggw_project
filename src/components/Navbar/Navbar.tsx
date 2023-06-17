import './Navbar.css'
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import React from 'react'
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  
  const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
  }
    const [isActive, setIsActive] = React.useState(false);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setIsActive(!isActive);
    };

  return (
    <div>
      <nav>
        <ul className="list">
          <li className="left"><Link to='/'>{t("Home")}</Link></li>
          <li><Link to='/CreateTeam'>{t("CreateTeam")}</Link></li>
          <li className="right"><Link to='/Login'>{t("Login")}</Link></li>
          <li><Link to='/Signup'>{t("Signup")}</Link></li>
          <li>
            <select onChange={onClickLanguageChange}>
              <option value="en">English</option>
              <option value="pl">Polski</option>
            </select>
          </li>

        </ul>
        <div className='mobileNav'>
          <li className="leftHome"><Link to='/'>{t("Home")}</Link></li>
          <div className = 'languageHamburger'>
          <select onChange={onClickLanguageChange} className={isActive ? 'listMobile2' : 'listb2'}>
              <option value="en"><p className='language'>En</p></option>
              <option value="pl">Pl</option>
            </select>
          <button className='hamburger' onClick={(e) => handleClick(e)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          </div>

        </div>
      </nav>
      <ul className={isActive ? 'listMobile' : 'listb'}>
          <li><Link to='/Login'>{t("Login")}</Link></li>
          <li><Link to='/Signup'>{t("Signup")}</Link></li>
          <li><Link to='/CreateTeam'>{t("CreateTeam")}</Link></li>

        </ul>
    </div>
  )
}

export default Navbar