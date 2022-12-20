import React, { useState } from 'react'
import './App.css';
import Arrow from  './assets/seta.png'
import Password from './components/passwordfield/password';

function App() {
  const [lenghtpassword, setLenghtpassword] = useState(4);
  const [senha, setSenha] = useState('')

    const gerar = () => {

    const alfabetoUp = [ 'A', 'B', 'C', 'D', 'E','F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N','O', 'P','Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const alfabetoLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    const simbolos = ['!','#','$',"<","&","*",'/',":",";","(",")","@","~","+","<",">","?","|","="];
    
    let password ='';
    
     // parâtetro é tamanho da senha do usuário
    
        // a senha como o usuário no definiu ainda começa com zero
        // então enquanto a variável password for menor que o tamanho da senha que o usuário quer 
        //vamos percorrer um loop
        while(password.length <= lenghtpassword-1){
    
        
            const GeradorDeLowerLetters = Math.floor(Math.random() * alfabetoLower.length); //sortear uma letra maiúscula no meio do array
    
            const randomNumber  = Math.floor( Math.random() * 10) //criar números de 0 a 9;
    
            const randomUpLetters = Math.floor( Math.random() * alfabetoUp.length) //sortear uma letra minúscula ...
    
            const randomSimbolos = Math.floor( Math.random() * simbolos.length) //sortear um simbolo
    
            //enquanto o loop for verdade acrescenta mais um caracterie para password
            password += `${alfabetoLower[GeradorDeLowerLetters]}${simbolos[randomSimbolos]}${alfabetoUp[randomUpLetters]}${randomNumber}`;
        
            setSenha(password)
        }
    }
  return (
    <div>

      <Password senha={senha}/>
     <section className='container'>

      <div className='range-data'>
        <label>Character Lenght</label>
        <h2>{lenghtpassword}</h2>
      </div>
      <div className='range-container'>
        <input type="range" min="4" max="15" value={lenghtpassword}
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
      <div className='button'>
        <button  onClick={gerar}
          >Generate <img src={Arrow}
          alt="seta icone"/></button>
    </div>
     </section>
    </div>
  );
}

export default App;
