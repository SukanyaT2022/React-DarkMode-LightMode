
import { useState } from 'react';
import './App.css';

function App() {
// let changeColor = {
//   color: 'red',
//   fontSize: '20px'
// }

const [changeTextColor,setChangeTextColor] = useState('black')


  return (
  
    <div className="App">
    
<label className="switch">
  <input type="checkbox"/>
  <span className="slider round"></span>
</label>
      {/* <p style={changeColor}>Hello Sunshine!</p> */}

      <h2 style={{color:changeTextColor}}>Hello Summer!</h2>
    
    </div>
  );
}

export default App;
