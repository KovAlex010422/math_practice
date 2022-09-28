import React from 'react';
import Equation from './equation/Equation';
import FormGenerateEquations from './equation/FormGenerateEquations';

const Content = () => {
  return (
    <div className='body_content'>
      <FormGenerateEquations />
      {[...Array(20).keys()].map( (index) => <Equation key={index} />)}
    </div>
  )
}

export default Content