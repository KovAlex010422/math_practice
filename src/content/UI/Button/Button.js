import React from 'react'
import './btn_styles.css'

function Button({children}) {
  return (
    <button className='btn_styles'>{children}</button>
  )
}

export default Button