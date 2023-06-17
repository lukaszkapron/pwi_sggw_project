import './Login.css'
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();

  return (
    <div className="login-form">
      <form>
        <h1>{t("Login")}</h1>
        <div className="content">
          <div className="input-field">
            <input type="email" placeholder={t("Email")} />
          </div>
          <div className="input-field">
            <input type="password" placeholder={t("Password")} />
          </div>
          <a className="link">{t("ForgotPassword")}</a>
        </div>
        <div>
          <button>{t("Login")}</button>
        </div>
        <div className='or'>
          <h3><span>{t("Or")}</span></h3>
        </div>
        <div className='iconsList'>
          <a className='icon'><FaFacebook size={40} color={'#4267B2'} /></a>
          <a className='icon'><FcGoogle size={40} /></a>
        </div>
        <div className='account'>
          <a className="link">{t("NeedAccount")}</a>
        </div>
      </form>
    </div>
  )
}

export default Login