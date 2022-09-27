import React, { useState } from 'react';
import styles from './Content.css'
import Equation from './equation/Equation';
import Button from './UI/Button/Button';
import Input from './UI/Button/Input/Input';

export default function Content() {
  const [minNum, setMinNum ] = useState('')
  const [maxNum, setMaxNum] = useState('')

  return (
    <div className='body_content'>
      <p>Введи числа, в межах яких будуть генеруватися математичні приклади</p>
      <form>
        <Input type='Number' placeholder='Мінімальне число' value={minNum} onChange={ e=> setMinNum(e.target.value)}/>
        <Input type='Number' placeholder='Максимальне число' value={maxNum} onChange={e=> setMaxNum(e.target.value)}/>
        <Button >Згенерувати завдання</Button>
      </form>
      <Equation min={setMinNum} max={setMaxNum}  />

    </div>
  )
}
