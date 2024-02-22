
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  // let changeColor ={
  //   color:'pink',
  //   fontSize: '25px'
  // }
  const [colorState,setColorState] = useState('black')
  const [flag,setFlag] = useState(false);

  useEffect(()=>{
    flag?setColorState('red'):setColorState('black')
  },[flag])

  const switchHandler=()=>{
    setFlag(!flag)
    console.log(flag)
  }

  return(
<div>
 <label className={`switch ${colorState}`} onClick={switchHandler}>
   <input type="checkbox"/>
   <span className="slider round"></span>
 </label>
 <p style={{color:colorState}}>Bye Bye Winter!</p>
 {/* //color is inline css property */}
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