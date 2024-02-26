
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [colorState,setColorState] = useState('black')


  // const switchHandler=()=>{
  //   setColorState((color) => color == "red"? "black":'red');
  //   // colorState === "red"?setColorState("black"):setColorState('red')

  // }

  return(
    <div clas>
      <label className={`switch ${colorState}`} >
        <input type="checkbox" onChange={switchHandler}/>
        <span className="slider round"></span>
      </label>
      <p style={{color:colorState}}>Bye Bye Winter!</p>
    </div>
  )
}

export default App;


// let changeColor = {
//   color: 'red',
//   fontSize: '20px'
// }

// const [changeTextColor,setChangeTextColor] = useState('black')


//   return (
  
//     <div className="App">
    
// <label className="switch">
//   <input type="checkbox"/>
//   <span className="slider round"></span>
// </label>
//       {/* <p style={changeColor}>Hello Sunshine!</p> */}

//       <h2 style={{color:changeTextColor}}>Hello Summer!</h2>
    
//     </div>
//   );