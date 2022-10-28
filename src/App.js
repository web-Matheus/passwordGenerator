import React, { useState } from 'react'
import './App.css';
import Button from './components/button/button';
import Password from './components/passwordfield/password';

function App() {
  const [lenghtpassword, setLenghtpassword] = useState(0);
  return (
    <div>
     
      <Password/>
     <section className='container'>

      <div className='range-data'>
        <label>Character Lenght</label>
        <h2>{lenghtpassword}</h2>
      </div>
      <div className='range-container'>
        <input type="range" min="0" max="15" value={lenghtpassword}
        onChange={(e) => setLenghtpassword(e.target.value)}/>
      </div>
      
      <form>
        <div>
          <input type="checkbox"/>
          <label>Include Uppercase Letters</label>
        </div>
        <div>
          <input type="checkbox"/>
          <label>Include Lowercase Letters</label>
        </div>
        <div>
          <input type="checkbox"/>
          <label>Include Numbers</label>
        </div>
        <div>
          <input type="checkbox"/>
          <label>Include Symbols</label>
        </div>
      </form>
        <Button/>
     </section>
    </div>
  );
}

export default App;
