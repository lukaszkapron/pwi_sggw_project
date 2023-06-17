import React from 'react'
import './CreateTeam.css'
import { useTranslation } from "react-i18next";

const CreateTeam = () => {
  const { t } = useTranslation();

  function generateRandomColor() {
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    let randomNumberstring = randomNumber.toString(16);
    let randColor = randomNumberstring.padStart(6, '0');
    return `#${randColor.toUpperCase()}`
  }

  var defautLogo='https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png'
  const [color1, setColor1] = React.useState<string>(generateRandomColor());
  const [color2, setColor2] = React.useState<string>(generateRandomColor());
  const [file, setFile] = React.useState<string>(defautLogo);


  const handleChangeLogo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if(files?.length!=0){
      var url = URL.createObjectURL(files![0])
      setFile(url)
      console.log(url)
    }
  }

  const setDefaultLogo = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setFile(defautLogo)
  }

  
  return (
    <div className="createTeam-form">
      <form>
        <h1>{t("CreateTeam")}</h1>
        <div className="content">
          <div className="input-field">
            <input type="text" placeholder={t("TeamName")} />
          </div>
          <div className="input-field">
            <input type="text" placeholder={t("LeagueName")} />
          </div>
          <div className='input-file'>
            <p>{t("Select")}</p>
            <input type="file" accept='.img,.jpg,.jpeg,.bmp,.gif,.png' onChange={handleChangeLogo} />
            <img src={file} className='imgLogo'></img>
            <button className='deleteButton' onClick={e => setDefaultLogo(e)}>{t("DefaultLogo")}</button>
          </div>
          <div className='input-color'>
            <p>{t("FirstColor")}</p>
            <input type="color" className='color' value={color1} onChange={e => setColor1(e.target.value)} />
          </div>
          <div className='input-color'>
            <p>{t("SecondColor")}</p>
            <input type="color" className='color' value={color2} onChange={e => setColor2(e.target.value)} />
          </div>
        </div>
        <div>
          <button className='buttonCreate'>{t("CreateTeam")}</button>
        </div>
      </form>
    </div>
  )
}

export default CreateTeam