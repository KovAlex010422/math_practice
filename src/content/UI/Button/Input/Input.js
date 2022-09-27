import React from 'react';
import './input_styles.css';

function Input({placeholder, type }) {
  return (
    <input className='input_styles' placeholder={placeholder} type={type} />
  )
}

export default Input