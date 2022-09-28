import React, { useState } from 'react';
import Input from '../UI/Button/Input/Input';
import Button from '../UI/Button/Button'

function FormGenerateEquations() {
   
        const [minNum, setMinNum ] = useState()
        const [maxNum, setMaxNum] = useState()
      
        const generate = (e) => {
          e.preventDefault()
        }
  return (
<form >
    <p>Введи числа, в межах яких будуть генеруватися математичні приклади</p>
    <Input type='Number' placeholder='Мінімальне число' value={minNum} onChange={ e => setMinNum(e.target.value)}/>
    <Input type='Number' placeholder='Максимальне число' value={maxNum} onChange={e => setMaxNum(e.target.value)}/>
    <Button onClick={generate}>Згенерувати завдання</Button>
</form>
  )
}

export default FormGenerateEquations