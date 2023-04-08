import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField/InputField';

const App:React.FC = () => {
    // states
    const [inputTodo, setInputTodo] = useState<string>("");

    console.log(inputTodo)

  return (
    <div className='app'>
        <span className='heading'>Taskify</span>
      <InputField inputTodo={inputTodo} setInputTodo={setInputTodo} />
    </div>
  )
}

export default App
