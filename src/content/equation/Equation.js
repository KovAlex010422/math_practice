import React from 'react'
import Input from '../UI/Button/Input/Input';

function Equation({min, max}) {
    
    const randomNumber = ( min=1, max = 10) => {
        return Math.floor((Math.random() * max)+min);
    }

  return (
    <div>
        {randomNumber()} + {randomNumber()} = <Input type='Number' placeholder='Твоя відповідь' />
        {min} {max}
    </div>
  )
}

export default Equation