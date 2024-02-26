import React, { useState } from 'react'
import './Test.css'

const Test = () => {
const [change, setChange] = useState('light')

const switchHandler=()=>{
setChange((val)=>val=='light'?'dark':'light')
}
  return (
    <div className={change}>
<label className={`switch`} >
        <input type="checkbox" onChange={switchHandler}/>
        <span className="slider round"></span>
      </label>
      <p>Bye Bye Winter!</p>
    </div>
  )
}

export default Test