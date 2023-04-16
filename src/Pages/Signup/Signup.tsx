import './Signup.css'
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';


const Signup = () => {
  return (
    <div className="signup-form">
      <form>
        <h1>Sign up</h1>
        <div className="content">
          <div className="input-field">
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-field">
            <input type="text" placeholder="Username" />
          </div>
          <br />
          <div className="input-field">
            <input type="password" placeholder="Password" />
          </div>
          <div className="input-field">
            <input type="password" placeholder="Confirm Password" />
          </div>
        </div>
        <div>
          <button>Sign Up</button>
        </div>
        <div className='or'>
          <h3><span>OR</span></h3>
        </div>
        <div className='iconsList'>
          <a className='icon'><FaFacebook size={40} color={'#4267B2'} /></a>
          <a className='icon'><FcGoogle size={40} /></a>
        </div>
        <div className='account'>
          <a className="link">Already a user?</a>
        </div>
      </form>
    </div>
  )
}

export default Signup