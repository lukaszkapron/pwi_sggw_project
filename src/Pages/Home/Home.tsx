import './Home.css'
import teamImg from '../Home/team.png'
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si'


const Home = () => {
  return (
    <div>
      <div className='slide'>
        <div className='info'>
          <div className='mainText'>
            Create a free app for tracking your sport team stats
          </div>
          <div className='commentText'>
            Build your squad and manage your players and leagues
          </div>
        </div>
        <div className='image'>
          <img className='teamImg' src={teamImg} alt='team'></img>
        </div>
      </div>

      <div className='number'>
        <p className='numberText'>SportApp in numbers</p>
      </div>
      
      <div className='infos'>
        <div className='element'>
          <p className='count'>100 000</p>
          <p className='of'>Users</p>
        </div>
        <div className='element'>
          <p className='count'>250 000</p>
          <p className='of'>Teams</p>
        </div>
        <div className='element'>
          <p className='count'>3 000 000</p>
          <p className='of'>Players</p>
        </div>
      </div>

      <div className="contactUs-form">
      <form>
        <h1>ContactUs</h1>
        <div className="content">
          <div className="input-field">
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-field">
            <input type="text" placeholder="Subject" />
          </div>
          <div className="input-field">
            <textarea  placeholder="Message" className='message'/>
          </div>
        </div>
        <div>
          <button>Send</button>
        </div>
        <div className='or'>
          <h3><span>OR</span></h3>
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