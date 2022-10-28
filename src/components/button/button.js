import React from 'react'

import './button.css'

import Seta from '../../assets/seta.png'
const Button = () => {
  return (
    <div className='button'>
        <button>Generate <img src={Seta}/></button>
    </div>
  )
}

export default Button;