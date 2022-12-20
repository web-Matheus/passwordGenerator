import React from 'react'
import copyImage from '../../assets/copy.png'
import './password.css'
const Password = ({senha}) => {
    const copy =()=>{
      var copyText = document.getElementById("input")
      copyText.select();
      copyText.setSelectionRange(0, 99999); // For mobile devices
    
       // Copy the text inside the text field
      navigator.clipboard.writeText(copyText.value);
      alert("Copied the text: " + copyText.value);
    }
  return (
    <div className='passwordfield' >
        <input type="text" value={senha} id="input"/>  
        <img src={copyImage} alt="icone para copiar a senha gerada"
      onClick={copy}/>
    </div>
  )
}

export default Password;