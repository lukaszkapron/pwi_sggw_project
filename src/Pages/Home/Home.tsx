import './Home.css'
import teamImg from '../Home/team.png'


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
    </div>

  )
}

export default Home