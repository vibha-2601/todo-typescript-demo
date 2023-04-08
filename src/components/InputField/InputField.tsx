import React from 'react';
import './InputField.css';

const InputField = () => {
  return (
    <form className='input'>
        <input type='text' placeholder='Enter your task...' className='input_box' />
        <button type='submit' className='input_submit'>Go</button>

    </form>
  )
}

export default InputField
