import React from "react";
import "./InputField.css";

interface Props {
  inputTodo: string;
  setInputTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField:React.FC<Props> = ({ inputTodo, setInputTodo }) => {
  return (
    <form className="input">
      <input
        type="text"
        placeholder="Enter your task..."
        className="input_box"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
      />
      <button type="submit" className="input_submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
