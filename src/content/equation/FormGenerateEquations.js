import React, { useState } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button'

function FormGenerateEquations() {
        const [ran, setRan] = useState();
        const [minNum, setMinNum ] = useState();
        const [maxNum, setMaxNum] = useState();
        let randomNumber1 = Math.floor(Math.random() * maxNum);
        let randomNumber2 = Math.floor(Math.random() * maxNum);
        const generate = (e) => {
          e.preventDefault()
          return <div>{setRan(randomNumber1 + '+' + randomNumber2 + '=' + `${<Input type='Number' placeholder='Твоя відповідь' />}`)}</div>
          //setMinNum('')
          //setMaxNum('')
        }
  return (
<form >
    <p>Введи числа, в межах яких будуть генеруватися математичні приклади</p>
    <Input type='Number' placeholder='Мінімальне число' value={minNum} onChange={ e => setMinNum(e.target.value)}/>
    <Input type='Number' placeholder='Максимальне число' value={maxNum} onChange={e => setMaxNum(e.target.value)}/>
    <Button onClick={generate}>Згенерувати завдання</Button>
    <div>
      {ran}
    </div>
</form>
  )
}

export default FormGenerateEquations