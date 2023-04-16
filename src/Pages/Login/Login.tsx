import './Login.css'
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
  return (
    <div className="login-form">
      <form>
        <h1>Login</h1>
        <div className="content">
          <div className="input-field">
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-field">
            <input type="password" placeholder="Password" />
          </div>
          <a className="link">Forgot Your Password?</a>
        </div>
        <div>
          <button>Login</button>
        </div>
        <div className='or'>
          <h3><span>OR</span></h3>
        </div>
        <div className='iconsList'>
          <a className='icon'><FaFacebook size={40} color={'#4267B2'} /></a>
          <a className='icon'><FcGoogle size={40} /></a>
        </div>
        <div className='account'>
          <a className="link">Need an account?</a>
        </div>
      </form>
    </div>
  )
}

export default Login