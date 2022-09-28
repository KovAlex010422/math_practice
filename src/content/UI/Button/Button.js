import React from 'react'
import './btn_styles.css'

function Button({ children, ...props }) {
  return (
    <button className='btn_styles' {...props}>
      { children } 
    </button>
  )
}

export default Button