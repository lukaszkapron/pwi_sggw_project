import './Signup.css'
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useTranslation } from "react-i18next";

const Signup = () => {
  const { t } = useTranslation();

  return (
    <div className="signup-form">
      <form>
        <h1>{t("Signup")}</h1>
        <div className="content">
          <div className="input-field">
            <input type="email" placeholder={t("Email")} />
          </div>
          <div className="input-field">
            <input type="text" placeholder={t("UserName")} />
          </div>
          <br />
          <div className="input-field">
            <input type="password" placeholder={t("Password")} />
          </div>
          <div className="input-field">
            <input type="password" placeholder={t("ConfirmPassword")} />
          </div>
        </div>
        <div>
          <button>{t("Signup")}</button>
        </div>
        <div className='or'>
          <h3><span>{t("Or")}</span></h3>
        </div>
        <div className='iconsList'>
          <a className='icon'><FaFacebook size={40} color={'#4267B2'} /></a>
          <a className='icon'><FcGoogle size={40} /></a>
        </div>
        <div className='account'>
          <a className="link">{t("AlreadyUser")}</a>
        </div>
      </form>
    </div>
  )
}

export default Signup