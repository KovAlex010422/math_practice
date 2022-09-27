import React from 'react'
import Content from '../Content';
import Input from '../UI/Button/Input/Input';

function Equation({maxNumber, min, max}) {
    
    const randomNumber = (min = 0, max = 10) => {
        return Math.floor(Math.random() * max);
    }

  return (
    <div>
        {randomNumber()} + {randomNumber()} = <Input type='Number' />
    </div>
  )
}

export default Equation