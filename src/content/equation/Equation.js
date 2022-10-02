import React from 'react'
import Input from '../UI/Input/Input';

function Equation() {

  const randomNumber = ( min=1, max = 10) => {
        return Math.floor((Math.random() * max)+min);
    };
    let num1 = randomNumber();
    let num2 = randomNumber();
    if (num1 == num2) {
      num2=num2+1
    }
    return (
    <div>
        {num1} + {num2} = <Input type='Number' placeholder='Твоя відповідь' />
    </div>
  )
}

export default Equation