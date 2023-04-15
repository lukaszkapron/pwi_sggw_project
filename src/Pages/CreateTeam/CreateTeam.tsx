import React from 'react'
import './CreateTeam.css'


const CreateTeam = () => {

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
        <h1>Create Team</h1>
        <div className="content">
          <div className="input-field">
            <input type="text" placeholder="Your team name*" />
          </div>
          <div className="input-field">
            <input type="text" placeholder="Your League name" />
          </div>
          <div className='input-file'>
            <p>Select team logo </p>
            <input type="file" accept='.img,.jpg,.jpeg,.bmp,.gif,.png' onChange={handleChangeLogo} />
            <img src={file} className='imgLogo'></img>
            <button className='deleteButton' onClick={e => setDefaultLogo(e)}>Default logo</button>
          </div>
          <div className='input-color'>
            <p>First color:</p>
            <input type="color" className='color' value={color1} onChange={e => setColor1(e.target.value)} />
          </div>
          <div className='input-color'>
            <p>Second color:</p>
            <input type="color" className='color' value={color2} onChange={e => setColor2(e.target.value)} />
          </div>
        </div>
        <div>
          <button className='buttonCreate'>Create Team</button>
        </div>
      </form>
    </div>
  )
}

export default CreateTeam