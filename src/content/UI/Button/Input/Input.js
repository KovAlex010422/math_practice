import React from 'react';
import classes from './input_styles.module.css';

function Input( props ) {
  return (
    <input className={classes.input_styles} {...props} />
  )
}

export default Input