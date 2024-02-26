import { useEffect, useState } from 'react';
import './App.css';

function Mode() {
  const [mode,setMode] = useState('light')

  const switchHandler=()=>{
    setMode((val) => val == "light"? "dark":'light');
    // // colorState === "red"?setColorState("black"):setColorState('red')
  }

  return(
    <div className={`${mode}`}>
      <label className={`switch`} >
        <input type="checkbox" onChange={switchHandler}/>
        <span className="slider round"></span>
      </label>
      <p>Bye Bye Winter!</p>
    </div>
  )
}

export default Mode;
