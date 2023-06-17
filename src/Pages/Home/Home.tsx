import './Home.css'
import teamImg from '../Home/team.png'
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si'
import { useTranslation } from "react-i18next";


const Home = () => {
  
  const { t} = useTranslation();

  return (
    <div>
      <div className='slide'>
        <div className='info'>
          <div className='mainText'>
            {t("Create")}
          </div>
          <div className='commentText'>
            {t("Build")}
          </div>
        </div>
        <div className='image'>
          <img className='teamImg' src={teamImg} alt='team'></img>
        </div>
      </div>

      <div className='number'>
        <p className='numberText'>{t("Number")}</p>
      </div>
      
      <div className='infos'>
        <div className='element'>
          <p className='count'>100 000</p>
          <p className='of'>{t("Users")}</p>
        </div>
        <div className='element'>
          <p className='count'>250 000</p>
          <p className='of'>{t("Teams")}</p>
        </div>
        <div className='element'>
          <p className='count'>3 000 000</p>
          <p className='of'>{t("Players")}</p>
        </div>
      </div>

      <div className="contactUs-form">
      <form>
        <h1>{t("Contact")}</h1>
        <div className="content">
          <div className="input-field">
            <input type="email" placeholder={t("Email")} />
          </div>
          <div className="input-field">
            <input type="text" placeholder={t("Subject")} />
          </div>
          <div className="input-field">
            <textarea  placeholder={t("Message")} className='message'/>
          </div>
        </div>
        <div>
          <button>{t("Send")}</button>
        </div>
        <div className='or'>
          <h3><span>{t("Or")}</span></h3>
        </div>
        <div className='iconsList'>
          <a className='icon'><FaFacebook size={40} color={'#4267B2'} /></a>
          <a className='icon'><FaLinkedin size={40} color={'#0073b1'} /></a>
          <a className='icon'><SiGmail size={40} color={'#DB4437'}/></a>
        </div>
      </form>
    </div>

    </div>

  )
}

export default Home